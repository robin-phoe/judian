
###接口列表
|  接口 | 名称 | 说明 |
|  ----  | ----  | ---- |
| /get_room_info | 获取房间实时信息 |  |
| /set_room_info | 房间设置 |  |
| /get_commodity_info | 获取商品信息 |  |
| /set_commodity_info | 商品设置 |  |
| /get_history_order_info | 获取历史订单信息 |  |
| /del_history_order_info | 删除历史订单信息 |  |
| /pause_order | 暂停/恢复订单 |  |
| /open_end_order | 开始/结束订单 |  |


### /get_room_info
**描述**：获取房间实时信息

**方法: GET**

**回报参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| code | string | 是 | 200表示成功，其他表示失败 |
| message | string | 是 | 请求成功或失败的信息 |
| data | list | 是 | 数据结果 |

**data参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| id | string | 是 | 房间id |
| name | string | 是 | 房间名 |
| price | string | 是 | 房间单价 |
| start_time | string | 是 | 开始时间，空值为"--:--:--" |
| end_time | string | 是 | 结束时间，空值为"--:--:--" |
| total_time | string | 是 | 当前时长 |
| pause_time | string | 是 | 暂停时长 |
| cost | string | 是 | 总费用 |
| order_info | string | 是 | 订单详情#todo，考虑什么格式展示？ |
| pause_status | string | 是 | 暂停状态， 'running'：进行中,'pause':暂停中|
| order_status | bool | 是 | 暂停状态， 'running'：进行中,'ending':可开单|

**回报示例** 

```
{
    "code": 200,
    "message": "success",
    "data": [
    {
        "id": "001",
        "name": "房间1",
        "price": "50.0",
        "start_time": "13:00:00",
        "end_time": "--:--:--",
        "total_time": "03:00:00",
        "pause_time": "00:00:00",
        "cost": "200.0",
        "order_info": "",
        "pause_status": "running",
        "order_status": "running"
    },
    {
        "id": "002",
        "name": "房间2",
        "price": "50.0",
        "start_time": "--:--:--",
        "end_time": "--:--:--",
        "total_time": "00:00:00",
        "pause_time": "00:00:00",
        "cost": "0.0",
        "order_info": "",
        "pause_status": "running",
        "order_status": "running"
    }

]
}
```

### /set_room_info
**描述**：房间设置，传全量

**方法: POST**

**请求参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| id | string | 是 | 房间id,新增房间id为"",|
| name | string | 是 | 房间名 |
| price | string | 是 | 房间单价|

**请求示例：**

```
[
    {
        "id":"001",
        "name":"房间一",
        "price":"50"
    },
    {
        "id":"002",
        "name":"房间二",
        "price":"50"
    }
]

```

**回报参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| code | string | 是 | 200表示成功，其他表示失败 |
| message | string | 是 | 请求成功或失败的信息 |
| data | list | 是 | 数据结果 |

**回报示例** 

```
{
    "code":"200",
    "message":"修改成功",
    "data":{}
}
```

### /get_commodity_info
**描述**：获取商品信息

**方法: GET**

**回报参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| code | string | 是 | 200表示成功，其他表示失败 |
| message | string | 是 | 请求成功或失败的信息 |
| data | list | 是 | 数据结果 |

**data参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| id | string | 是 | 商品id |
| name | string | 是 | 商品名 |
| price | string | 是 | 商品单价 |


**回报示例** 

```
{
    "code": 200,
    "message": "success",
    "data": [
    {
        "id": "001",
        "name": "红牛",
        "price": "10",
    },
    {
        "id": "002",
        "name": "中华硬",
        "price": "50",
    }

]
}
```

### /set_commodity_info
**描述**：商品设置，传全量

**方法: POST**

**请求参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| id | string | 是 | 商品id,新增商品id为"",|
| name | string | 是 | 商品名 |
| price | string | 是 | 商品单价|

**请求示例：**

```
[
    {
        "id":"001",
        "name":"红牛",
        "price":"10"
    },
    {
        "id":"002",
        "name":"中华硬",
        "price":"60"
    }
]

```

**回报参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| code | string | 是 | 200表示成功，其他表示失败 |
| message | string | 是 | 请求成功或失败的信息 |
| data | list | 是 | 数据结果 |

**回报示例** 

```
{
    "code":"200",
    "message":"修改成功",
    "data":{}
}
```



### /get_history_order_info
**描述**：获取历史订单信息

**方法: GET**

**回报参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| code | string | 是 | 200表示成功，其他表示失败 |
| message | string | 是 | 请求成功或失败的信息 |
| total | string | 是 | 总计 |
| data | list | 是 | 数据结果 [daily]|

**daily参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| id | string | 是 | 编码 |
| date | string | 是 | 日期 |
| subtotal | string | 是 | 小计 |
|orders| list | 是 | 订单详情 |

**orders参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| order_id | string | 是 | 订单id |
| room_name | string | 是 | 房间名 |
| start_time | string | 是 | 开始时间 |
| end_time | string | 是 | 结束时间 |
| total_time | string | 是 | 总时长 |
| order_info | string | 是 | 订单详情 |
| cost | string | 是 | 总费用 |

**回报示例：**

```
{
    "code": 200,
    "message": "success",
    "total": "1000",
    "data": [
    {
        "id": "20200101",
        "date": "2020-01-01",
        "subtotal": "200",
        "orders": [
            {
                "order_id": "20200101001",
                "room_name": "房间1",
                "start_time": "13:00:00",
                "end_time": "16:00:00",
                "total_time": "03:00:00",
                "order_info": "红牛*1",
                "cost": "100"
            },
            {
                "order_id": "20200101002",
                "room_name": "房间2",
                "start_time": "13:00:00",
                "end_time": "16:00:00",
                "total_time": "03:00:00",
                "order_info": "红牛*1，中华*1",
                "cost": "100"
            }
        ]
    },
    {
        "id": "20200102",
        "date": "2020-01-02",
        "subtotal": "200",
        "orders": [
            {
                "order_id": "20200102001",
                "room_name": "房间1",
                "start_time": "13:00:00",
                "end_time": "16:00:00",
                "total_time": "03:00:00",
                "order_info": "红牛*1",
                "cost": "100"
            },
            {
                "order_id": "20200102002",
                "room_name": "房间2",
                "start_time": "13:00:00",
                "end_time": "16:00:00",
                "total_time": "03:00:00",
                "order_info": "红牛*1，中华*1",
                "cost": "100"
            }
        ]
    }

]
}
```

### /del_history_order_info
**描述**：删除历史订单信息

**方法: POST**

**请求参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| id | string | 是 | 订单id |

**请求示例：**

```
{
    "id":"20200101001"
}
```

**回报参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| code | string | 是 | 200表示成功，其他表示失败 |
| message | string | 是 | 请求成功或失败的信息 |
| data | list | 是 | 数据结果 |

**回报示例** 

```
{
    "code":"200",
    "message":"删除成功",
    "data":{}
}
```


### /pause_order
**描述**：暂停/恢复订单

**方法: POST**

**请求参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| id | string | 是 | 房间id |
| action | string | 是 | "pause":暂停，"run":恢复 |

**请求示例：**

```
{
    "id":"001",
    "action":"pause"
}
```

**回报参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| code | string | 是 | 200表示成功，其他表示失败 |
| message | string | 是 | 请求成功或失败的信息 |
| data | list | 是 | 数据结果 |

**回报示例** 

```
{
    "code":"200",
    "message":"暂停成功",
    "data":{}
}
```




### /open_end_order
**描述**：开启/结束订单

**方法: POST**

**请求参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| id | string | 是 | 房间id |
| action | string | 是 | "open":开启，"end":结束 |

**请求示例：**

```
{
    "id":"001",
    "action":"open"
}
```

**回报参数：**

|  参数名 | 类型 | 是否必须 | 说明 |
|  ----  | ----  | ---- | ---- |
| code | string | 是 | 200表示成功，其他表示失败 |
| message | string | 是 | 请求成功或失败的信息 |
| data | list | 是 | 数据结果 |

**回报示例** 

```
{
    "code":"200",
    "message":"开启成功",
    "data":{}
}
```
