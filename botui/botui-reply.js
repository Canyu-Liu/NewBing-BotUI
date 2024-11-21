var botui = new BotUI("my-botui-app");
botui.message.bot({
    loading: true,
    delay: 200,
    content: "你好"
})

var start_chat = function () {
    return botui.action.button({
        delay: 500,
        action: [{
            text: "什么是BotUI",
            value: "about-botui"
        },
        {
            text: "什么是New Bing BotUI",
            value: "about-NBB"
        }, {
            text: "仓库地址",
            value: "repo"
        }]
    }).then(function (res) {
        if (res.value == "about-botui") {
            return botui.message.bot({
                loading: true,
                delay: 1000,
                content: "BotUI是一个用于构建聊天机器人的JavaScript库，官网：https://botui.org"
            })
        } else if (res.value == "about-NBB") {
            return botui.message.bot({
                loading: true,
                delay: 1000,
                content: "New Bing BotUI是仿New Bing页面的BotUI主题"
            })
        } else if (res.value == "repo") {
            return botui.message.bot({
                loading: true,
                delay: 1000,
                content: ""
            })
        }
    })
}
start_chat()

//清空聊天
function clean_message() {
    botui.message.removeAll()
    botui.message.bot({
        loading: true,
        delay: 200,
        content: "你好"
    })
    start_chat()
}