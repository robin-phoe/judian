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
        self.count = 0
    @classmethod
    def add_order(cls,room_id,order_content,count):
        for room in RoomInfoList:
            if room.id == room_id:
                date = datetime.datetime.now().strftime('%Y%m%d')
                room.max_order_id += 1
                order_id = date + room_id + str(room.max_order_id).zfill(3)
                order_info = OrderInfo()
                order_info.order_id = order_id
                order_info.order_content = order_content
                order_info.count = 1
                room.order_info.append(order_info)
                break
        else:
            print("房间不存在：{}".format(room_id))
            return False

        return order_id
    @classmethod
    def delete_order(cls,room_id,order_id_list):
        for room in RoomInfoList:
            if room.id == room_id:
                #倒序遍历删除order
                for order in room.order_info[::-1]:
                    if order.order_id not in order_id_list:
                        room.order_info.remove(order)
        #todo 增加一个退出
        return True
    def to_json(self):
        return {
            "order_id":self.order_id,
            "order_content":self.order_content,
            "count":self.count
        }


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
        self.pause_status:OrderStatus = OrderStatus.RUNNING
        self.order_status = OrderStatus.ENDING
    def to_dict(self):
        #计算总时长
        if self.order_status == OrderStatus.RUNNING:
            #计算时长，并转为时间格式
            total_time = datetime.datetime.now() - self.start_time
            hours = total_time.seconds // 3600
            minutes = (total_time.seconds - hours * 3600) // 60
            seconds = total_time.seconds - hours * 3600 - minutes * 60
            self.total_time = str(hours).zfill(2) + ":" + str(minutes).zfill(2) + ":" + str(seconds).zfill(2)
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
            'order_info':[order.to_json() for order in self.order_info],
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
        room = RoomInfo()
        room.id = room_id
        room.name = room_name
        room.price = room_price
        RoomIdList.append(room_id)
        RoomInfoList.append(room)
        print("新增房间：{}".format(room_id))
        print("房间列表：{},len:{}".format(RoomIdList,len(RoomInfoList)))
        return room_id

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
    @classmethod
    def add_commodity(cls,commodity_name,commodity_price):
        #生成商品id
        for i in range(999):
            commodity_id = str(i).zfill(3)
            if commodity_id not in CommodityIdList:
                break
        else:
            #todo 商品id用完了,完善退出机制
            return False
        commodity = CommodityInfo()
        commodity.id = commodity_id
        commodity.name = commodity_name
        commodity.price = commodity_price
        CommodityIdList.append(commodity_id)
        CommodityList.append(commodity)
        print("新增商品：{}".format(commodity_id))
        print("商品列表：{},len:{}".format(CommodityIdList,len(CommodityList)))
        return commodity_id

RoomInfoList:List[RoomInfo] = []
RoomIdList:List[str] = []
CommodityList:List[CommodityInfo] = []
CommodityIdList:List[str] = []

def get_room_info():
    print("get 房间列表：{},len:{}".format(RoomIdList, len(RoomInfoList)))
    for room in RoomInfoList:
        print("DEBUG get room:{}".format(room.to_dict()))
    return [room.to_dict() for room in RoomInfoList]

def set_room_info(request_data):
    request_room_id = []
    for room in request_data:
        if room['id'] != "":
            request_room_id.append(room['id'])
        else:
            room_id = RoomInfo.add_room(room['name'],room['price'])
            request_room_id.append(room_id)
    #倒叙删除
    for room in RoomInfoList[::-1]:
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
            com_id = CommodityInfo.add_commodity(commodity['name'],commodity['price'])
            request_commodity_id.append(com_id)
    for commodity in CommodityList[::-1]:
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

HistoryOrderList:List[HistoryOrders] = []

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
        #倒叙遍历删除
        for history_order in history_orders[::-1]:
            if history_order['id'] == order_id:
                history_orders.remove(history_order)
                break
    elif id_lenth == 11:
        #删除某个订单
        for history_order in history_orders[::-1]:
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
    order_id = request_data['id']
    for room in RoomInfoList:
        if room.id == order_id:
            if request_data['action'] == OrderStatus.PAUSE.value:
                room.pause_status = OrderStatus.PAUSE
            elif request_data['action'] == "run":
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
    order_id = request_data['id']
    for room in RoomInfoList:
        if room.id == order_id:
            print("room.order_id:{},order_id:{}".format(room.id,order_id))
            if request_data['action'] == "open":
                room.order_status = OrderStatus.RUNNING
                #开单操作
                room.start_time = datetime.datetime.now()
                room.start_time_str = datetime.datetime.now().strftime('%H:%M:%S')
                # room.end_time = None
                print("room {} open order".format(room.id))

            elif request_data['action'] == "end":
                room.order_status = OrderStatus.ENDING
                room.start_time = None
                room.start_time_str = "--:--:--"
                print("room {} end order".format(room.id))
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
            order_id = OrderInfo.add_order(room_id,order['order_content'],order['count'])
            request_order_id.append(order_id)
    OrderInfo.delete_order(room_id,request_order_id)
    #写入文件
    with open(os.path.join(Data_path,'room_info.json'),'w') as f:
        f.write(json.dumps(get_room_info()))

    return True
