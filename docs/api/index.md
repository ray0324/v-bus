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

#### 请求参数[Head]

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
