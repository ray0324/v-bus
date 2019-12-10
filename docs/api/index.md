# V-BUS 接口文档

## 一、认证管理

### 1.1 注册

#### 功能描述

> 注册新用户

#### 请求URL

> `POST /api/users/register`

#### 请求参数

```json
{
  "username":"ray5",
  "email": "r5@foxmail.com",
  "password":"0324",
  "mobile":"13005448800"
}
```

#### 返回数据

```json
{
  "err_no": 0,
  "err_msg": "注册成功",
  "data": {
    "token": "eyJh.eyJ1aWQiOjE4LC.SZ-GRfl70IQTI88c"
  }
}
```

### 1.2 登录

#### 功能描述

> 用户登录

#### 请求URL

> `POST /api/users/login`

#### 请求参数

```json
{
  "username":"ray",
  "password":"0324"
}
```

#### 返回数据

```json
{
  "err_no": 0,
  "err_msg": "注册成功",
  "data": {
    "token": "eyJh.eyJ1aWQiOjE4LC.SZ-GRfl70IQTI88c"
  }
}
```


### 1.3 获取用户资料

#### 功能描述

> 获取用户个人资料信息

#### 请求URL

> `GET /api/users/profile`

#### 请求参数[Headers]

```json
{
  "token":"eyJh.eyJ1aWQiOjE4LC.SZ-GRfl70IQTI88c",
}
```

#### 返回数据

```json
{
  "err_no": 0,
  "err_msg": "查询成功",
  "data": {
    "username": "ray",
    "nickname": null,
    "email": "r@foxmail.com",
    "mobile": "13005448800",
    "gender": 0,
    "birthdate": null
  }
}
```


## 二、产品管理

### 2.1 查询分类

#### 功能描述

> 获取产品类别

#### 请求URL

> `GET /api/categories`

#### 返回数据

```json
{
  "err_msg": "查询成功",
  "err_no": 0,
  "data": [
    {
      "id": 9,
      "pid": 0,
      "name": "新鲜蔬菜"
    },
    {
      "id": 10,
      "pid": 0,
      "name": "肉禽蛋类"
    },
  ]
}
```

### 2.2 添加分类

#### 功能描述

> 添加产品类别

#### 请求URL

> `POST /api/categories`

#### 请求参数

```json
{
  "catname": "海鲜水产",
  "pid": 0
}
```

#### 返回数据

```json
{
  "err_no": 0,
  "err_msg": "添加成功"
}
```

### 2.3 删除分类

#### 功能描述

> 删除产品分类

#### 请求URL

> `DELETE /api/categories/8`

#### 返回数据

```json
{
  "err_no": 0,
  "err_msg": "删除成功"
}
```

### 2.3 产品列表

#### 功能描述

> 查询产品列表

#### 请求URL

> `GET /api/products?catid=&perpage=&page=`

#### 请求参数[Query]

```json
{
  "catid":"9",
  "perpage":"10",
  "page": "11"
}
```
#### 返回数据

```json
{
  "err_no": 0,
  "err_msg": "查询成功",
  "data": [
    {
      "id": 1,
      "sn": "1001",
      "name": "白菜",
      "img": "http://img/img1.png",
      "desc": "新鲜的大白菜",
      "qty": 100,
      "unit": "kg",
      "price": 2.5,
      "created_at": "2019-08-22T00:53:05.000Z",
      "updated_at": "2019-08-22T00:53:08.000Z",
      "cat_id": 9,
      "category": {
        "id": 9,
        "pid": 0,
        "name": "新鲜蔬菜"
      }
    }
  ]
}
```
