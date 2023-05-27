import datetime
import os.path
import pathlib
from typing import List
from enum import Enum
import json

Data_path = pathlib.Path(__file__).parent.parent / 'Data'

class OrderStatus(Enum):
    ENDING = 'ending'
    PAUSE = 'pause'
    RUNNING = 'running'

class OrderInfo:
    def __init__(self):
        self.order_id = None
        self.order_content = None
    @classmethod
    def add_order(cls,room_id,order_content):
        for room in RoomInfoList:
            if room.id == room_id:
                date = datetime.datetime.now().strftime('%Y%m%d')
                room.max_oders_id += 1
                order_id = date + room_id + str(room.max_oders_id).zfill(3)
                order_info = OrderInfo()
                order_info.order_id = order_id
                order_info.order_content = order_content
                room.order_info.append(order_info)
                break
        else:
            print("房间不存在：{}".format(room_id))
            return False

        return order_info
    @classmethod
    def delete_order(cls,room_id,order_id_list):
        for room in RoomInfoList:
            if room.id == room_id:
                for order in room.order_info:
                    if order.order_id not in order_id_list:
                        room.order_info.remove(order)
                        break
        return True

class RoomInfo:
    def __init__(self):
        self.id = None
        self.name = None
        self.price = None
        self.start_time = None
        self.start_time_str = "--:--:--" #改为开始时间，时间格式
        self.end_time = "--:--:--"
        self.total_time = "00:00:00"
        self.pause_time = "00:00:00"
        self.pause_start_time = None
        self.cost = 0
        self.order_info:List[OrderInfo] = []
        self.max_order_id = 0
        self.pause_status:OrderStatus = OrderInfo.RUNNING
        self.order_status = OrderStatus.ENDING
    def to_dict(self):
        #计算总时长
        if self.order_status == OrderStatus.RUNNING:
            #计算时长，并转为时间格式
            self.total_time = datetime.datetime.now() - self.start_time
            hours = str(self.total_time.seconds // 3600).zfill(2)
            minutes = str((self.total_time.seconds - hours * 3600) // 60).zfill(2)
            seconds = str(self.total_time.seconds - hours * 3600 - minutes * 60).zfill(2)
            self.total_time = hours + ":" + minutes + ":" + seconds
        #计算暂停时长
        if self.pause_start_time and self.pause_status == OrderStatus.PAUSE:
            self.pause_time = datetime.datetime.now() - self.pause_start_time
            hours = str(self.pause_time.seconds // 3600).zfill(2)
            minutes = str((self.pause_time.seconds - hours * 3600) // 60).zfill(2)
            seconds = str(self.pause_time.seconds - hours * 3600 - minutes * 60).zfill(2)
            self.pause_time = hours + ":" + minutes + ":" + seconds

        return {
            'id':self.id,
            'name':self.name,
            'price':self.price,
            'start_time':self.start_time_str,
            'end_time':self.end_time,
            'total_time':self.total_time,
            'pause_time':self.pause_time,
            'cost':self.cost,
            'order_info':self.order_info,
            'pause_status':self.pause_status.value,
            'order_status':self.order_status.value
        }
    #新增房间
    @classmethod
    def add_room(cls,room_name,room_price):
        #生成房间id
        for i in range(999):
            room_id = str(i).zfill(3)
            if room_id not in RoomIdList:
                break
        else:
            #todo 房间id用完了,完善退出机制
            return False
        room = cls()
        room.id = room_id
        room.name = room_name
        room.price = room_price
        RoomIdList.append(room_id)
        RoomInfoList.append(room)
        return room

class CommodityInfo:
    def __init__(self):
        self.id = None #商品id
        self.name = None
        self.price = None

    def to_dict(self):
        return {
            'id':self.id,
            'name':self.name,
            'price':self.price
        }

RoomInfoList:List[RoomInfo] = []
RoomIdList:List[str] = []
CommodityList:List[CommodityInfo] = []
CommodityIdList:List[str] = []

def get_room_info():
    return [room.to_dict() for room in RoomInfoList]

def set_room_info(request_data):
    request_room_id = []
    for room in request_data:
        if room['id'] != "":
            request_room_id.append(room['id'])
        else:
            RoomInfo.add_room(room['name'],room['price'])
    for room in RoomInfoList:
        if room.id not in request_room_id:
            RoomInfoList.remove(room)
            RoomIdList.remove(room.id)

    #写入文件
    with open(os.path.join(Data_path,'room_info.json'),'w') as f:
        f.write(json.dumps(get_room_info()))

    return True

def get_commodity_info():
    return [Commodity.to_dict() for Commodity in CommodityList]

def set_commodity_info(request_data):
    request_commodity_id = []
    for commodity in request_data:
        if commodity['id'] != "":
            request_commodity_id.append(commodity['id'])
        else:
            CommodityInfo.add_commodity(commodity['name'],commodity['price'])
    for commodity in CommodityList:
        if commodity.id not in request_commodity_id:
            CommodityList.remove(commodity)
            CommodityIdList.remove(commodity.id)

    #写入文件
    with open(os.path.join(Data_path,'commodity_info.json'),'w') as f:
        f.write(json.dumps(get_commodity_info()))
    return True

class HistoryOrders:
    def __init__(self):
        self.id = None
        self.date = None
        self.subtotal = None
        self.orders:List[HistoryOrderInfo] = []

    def to_json(self):
        return {
            'id':self.id,
            'date':self.date,
            'subtotal':self.subtotal,
            'orders':[order.to_json() for order in self.orders]
        }

class HistoryOrderInfo:
    def __init__(self):
        self.order_id = None
        self.room_name = None
        self.start_time = None
        self.end_time = None
        self.total_time = None
        self.order_info = None
        self.cost = None
    def to_json(self):
        return {
            'order_id':self.order_id,
            'room_name':self.room_name,
            'start_time':self.start_time,
            'end_time':self.end_time,
            'total_time':self.total_time,
            'order_info':self.order_info,
            'cost':self.cost
        }

def get_history_order_info():
    #读取history_order_info.json文件
    history_order_path = os.path.join(Data_path,'history_order_info.json')
    if not os.path.exists(history_order_path):
        return []
    with open(history_order_path,'r') as f:
        history_order_info = json.loads(f.read())
    return history_order_info

def delete_history_order_info(request_data):
    order_id = request_data['order_id']
    id_lenth = len(order_id)
    history_orders = get_history_order_info()
    if id_lenth == 8:
        #删除某天的订单
        for history_order in history_orders:
            if history_order['id'] == order_id:
                history_orders.remove(history_order)
                break
    elif id_lenth == 11:
        #删除某个订单
        for history_order in history_orders:
            for order in history_order['orders']:
                if order['order_id'] == order_id:
                    history_order['orders'].remove(order)
                    break
    else:
        return False
    #写入文件
    with open(os.path.join(Data_path,'history_order_info.json'),'w') as f:
        f.write(json.dumps(history_orders))
    return True

def pause_order(request_data):
    order_id = request_data['order_id']
    for room in RoomInfoList:
        if room.order_id == order_id:
            if request_data['action'] == OrderStatus.PAUSE.value:
                room.pause_status = OrderStatus.PAUSE
            elif request_data['action'] == OrderStatus.RUNNING.value:
                room.pause_status = OrderStatus.RUNNING
            else:
                print("pause_order:action error.{}".format(request_data['action']))
                return False
            break
    else:
        print("pause_order:order_id error.{}".format(order_id))
        return False
    #写入文件
    with open(os.path.join(Data_path,'room_info.json'),'w') as f:
        f.write(json.dumps(get_room_info()))
    return True

def open_end_order(request_data):
    order_id = request_data['order_id']
    for room in RoomInfoList:
        if room.order_id == order_id:
            if request_data['action'] == "open":
                room.open_status = OrderStatus.RUNNING
                #开单操作
                room.start_time = datetime.datetime.now().strftime('%H:%M:%S')
                # room.end_time = None

            elif request_data['action'] == "end":
                room.open_status = OrderStatus.ENDING
            else:
                print("open_end_order:action error.{}".format(request_data['action']))
                return False
            break
    else:
        print("open_end_order:order_id error.{}".format(order_id))
        return False
    #写入文件
    with open(os.path.join(Data_path,'room_info.json'),'w') as f:
        f.write(json.dumps(get_room_info()))
    return True

def get_order_info():
    return []

def set_order_info(request_data):
    room_id = request_data['id']
    order_data = request_data['data']
    request_order_id = []
    for order in order_data:
        if order['order_id'] != "":
            request_order_id.append(order['order_id'])
        else:
            OrderInfo.add_order(room_id,order['order_content'])
    OrderInfo.delete_order(room_id,request_order_id)
    #写入文件
    with open(os.path.join(Data_path,'room_info.json'),'w') as f:
        f.write(json.dumps(get_room_info()))

    return True
