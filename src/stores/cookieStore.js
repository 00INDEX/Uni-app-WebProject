let cookies = reactive({})

const cookiesUpdate = (cookiesNew = {}) => {
    for(const key in cookiesNew){
        cookies[key] = cookiesNew[key]
    }
}

export default{ cookies, cookiesUpdate }