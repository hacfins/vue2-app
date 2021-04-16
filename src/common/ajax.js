
var baseUrl = 'https://unidemo.dcloud.net.cn';
export default function (url = '', options, type) {
    url = baseUrl + url;
    uni.request({
        url: url,
        data: options.data,
        method:type,
        success: (res) => {
            options.callback && options.callback(res)
        },
        fail: (err) => {
            options.errorback && options.errorback(err)
        },
        complete: () => {
            options.complete && options.complete()

        }
    });

}