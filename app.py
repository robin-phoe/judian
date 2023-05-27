# 从flask框架中导入Flask类
from flask import Flask,send_file,jsonify
import os
import views.funcation as funcation

# 传入__name__初始化一个Flask实例
app = Flask(__name__)

# app.route装饰器映射URL和执行的函数。这个设置将根URL映射到了hello_world函数上
@app.route('/')
def root():
    file_path = 'index.html' #os.path.join(STATIC_DIR,'index.html')
    return send_file(file_path)

#获取房间信息
@app.route('/get_room_info',methods=['GET'])
def get_room_info():
    content = funcation.get_room_info()
    data = {"code": 200, "msg": "success", "data": content}
    return jsonify(data)

#房间设置
@app.route('/set_room_info',methods=['POST'])
def set_room_info(request):
    request_data = request.get_json()
    res = set_room_info(request_data)
    if res:
        data = {"code": 200, "msg": "successed", "data": {}}
    else:
        data = {"code": 500, "msg": "failed", "data": {}}
    return jsonify(data)

#获取商品信息
@app.route('/get_commodity_info',methods=['GET'])
def get_commodity_info():
    content = funcation.get_commodity_info()
    data = {"code": 200, "msg": "success", "data": content}
    return jsonify(data)

#商品信息设置
@app.route('/set_commodity_info',methods=['POST'])
def set_commodity_info(request):
    request_data = request.get_json()
    res = set_commodity_info(request_data)
    if res:
        data = {"code": 200, "msg": "successed", "data": {}}
    else:
        data = {"code": 500, "msg": "failed", "data": {}}
    return jsonify(data)

#获取历史订单信息
@app.route('/get_history_order_info',methods=['GET'])
def get_history_order_info():
    content = funcation.get_history_order_info()
    data = {"code": 200, "msg": "success", "data": content}
    return jsonify(data)

#删除历史订单信息
@app.route('/delete_history_order_info',methods=['POST'])
def delete_history_order_info(request):
    request_data = request.get_json()
    res = funcation.delete_history_order_info(request_data)
    if res:
        data = {"code": 200, "msg": "successed", "data": {}}
    else:
        data = {"code": 500, "msg": "failed", "data": {}}
    return jsonify(data)

#暂停/恢复订单
@app.route('/pause_order',methods=['POST'])
def pause_order(request):
    request_data = request.get_json()
    res = funcation.pause_order(request_data)
    if res:
        data = {"code": 200, "msg": "successed", "data": {}}
    else:
        data = {"code": 500, "msg": "failed", "data": {}}
    return jsonify(data)

#开始/结束订单
@app.route('/open_end_order',methods=['POST'])
def open_end_order(request):
    request_data = request.get_json()
    res = funcation.open_end_order(request_data)
    if res:
        data = {"code": 200, "msg": "successed", "data": {}}
    else:
        data = {"code": 500, "msg": "failed", "data": {}}
    return jsonify(data)

#获取订单（已购买商品）信息
@app.route('/get_order_info',methods=['GET'])
def get_order_info():
    content = funcation.get_order_info()
    data = {"code": 200, "msg": "success", "data": content}
    return jsonify(data)

#订单信息设置（变更已购买商品，新增和删除）
@app.route('/set_order_info',methods=['POST'])
def set_order_info(request):
    request_data = request.get_json()
    res = set_order_info(request_data)
    if res:
        data = {"code": 200, "msg": "successed", "data": {}}
    else:
        data = {"code": 500, "msg": "failed", "data": {}}
    return jsonify(data)

if __name__ == '__main__':
    # 运行本项目，host=0.0.0.0可以让其他电脑也能访问到该网站，port指定访问的端口。默认的host是127.0.0.1，port为8888
    app.run(host='0.0.0.0',port=8888)