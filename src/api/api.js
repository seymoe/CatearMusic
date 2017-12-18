// 跨域Ajax服务
const agent = 'https://bird.ioliu.cn/v1/?url='

// 轮播图数据接口
const recommend = agent + 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1504325321679'

// 歌单 &sin=0&ein=29
const discList = agent + 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?rnd=0.3025553767276763&g_tk=717440456&jsonpCallback=getPlaylist&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&categoryId=10000000&sortId=5'

// 排行榜数据接口
const rank = agent + 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1504328912395'
// 搜索页面接口
const search = agent + 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1504328986952'
// 搜索动作接口
// &w=搜索词
const searchAction = agent + 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1504329085848'

export const recommendAPI = recommend
export const discListAPI = discList
export const rankAPI = rank
export const searchAPI = search
export const searchActionAPI = searchAction

// 返回的状态
export const ERROK = 0
