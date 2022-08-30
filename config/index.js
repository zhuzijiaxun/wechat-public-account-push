export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx8ad053034850dff8",
    // 公众号APP_SECRET
    APP_SECRET: "bb8d4390fd20668e88d738f25354cb9f",
    // 模板消息id
    TEMPLATE_ID: "XGPQTT6R6RV1Rs8peeNVF_GZYW37VZy5_Qdxs5O0DYY	",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["oq_Q16kDVx26kCtd6Jgpa9DD-DuE"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "天津",
    // 所在城市
    CITY: "天津",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "生日", "name": "sqq", "year": "2002", "date": "11-25"},
      {"type": "节日", "name": "相遇纪念日", "year": "2022", "date": "03-13"},
      {"type": "生日", "name": "xfb", "year": "2002", "date": "12-26"},
      {"type": "节日", "name": "相遇纪念日", "year": "2022", "date": "03-13"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 4,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-03-13",
    // 结婚纪念日
    MARRY_DATE: "2020-01-04",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{success_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
