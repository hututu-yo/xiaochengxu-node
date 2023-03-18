/*
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-03-17 11:55:12
 * @LastEditors: tu
 * @LastEditTime: 2023-03-18 21:23:10
 * @FilePath: /node/utils/oss-upload.js
 */
const OSS = require('ali-oss')
const path = require("path")

const client = new OSS({
  // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: 'oss-cn-hangzhou',
  // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
  accessKeyId: 'LTAI5tB7dgAFSnHdxJgxdiaC',
  accessKeySecret: 'la76cuP8mx1sXoP0ZXjhT8TooiOpL2',
  // 填写Bucket名称。
  bucket: 'xiaochengxu-hututu',
});

const headers = {
  // 指定Object的存储类型。
  'x-oss-storage-class': 'Standard',
  // 指定Object的访问权限。
  'x-oss-object-acl': 'private',
  // 通过文件URL访问文件时，指定以附件形式下载文件，下载后的文件名称定义为example.jpg。
  // 'Content-Disposition': 'attachment; filename="example.jpg"'
  // 设置Object的标签，可同时设置多个标签。
  'x-oss-tagging': 'Tag1=1&Tag2=2',
  // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
  'x-oss-forbid-overwrite': 'true',
};

async function put (name, file) {

  try {
    // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
    // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
    const result = await client.put(name, file
      // 自定义headers
      //,{headers}
    );
    if (result.res.status === 200) {
      return result
    } else {
      return Promise.reject(result)
    }
  } catch (e) {
    // return Promise.reject({
    //   code: 0,
    //   data: e,
    //   msg: "上传失败"
    // })
    return Promise.reject(e)
  }
}

exports.put = put