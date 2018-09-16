import { Regulars } from './'

/**
 * 必填字段校验
 * @param r
 * @param v
 * @param c
 */
const required = (r, v, c) => {
  c(!v || Regulars.empty(v) ? new Error('必填项，请填写！') : undefined)
}

/**
 * 货币输入校验
 * @param r
 * @param v
 * @param c
 */
const currency = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('必填项，请填写！'))
  else if (!Regulars.currency(v)) c(new Error('请填写一个正确的人民币金额！'))
  else c()
}

/**
 * 手机号校验
 * @param r
 * @param v
 * @param c
 */
const mobile = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入手机号码！'))
  else if (v.length !== 11) c(new Error('请输入正确的11位手机号码！'))
  else if (!Regulars.mobile(v)) c(new Error('手机号码不符合规范，校验失败！'))
  else c()
}

/**
 * 座机号校验
 * @param r
 * @param v
 * @param c
 */
const phone = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入座机号码！'))
  else if (!Regulars.phone(v)) c(new Error('请输入正确的座机号码！'))
  else c()
}

/**
 * 手机验证码校验
 * @param r
 * @param v
 * @param c
 */
const captcha = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入手机验证码！'))
  else if (v.length !== 4) c(new Error('请输入正确的4位手机验证码！'))
  else if (!Regulars.captcha(v)) c(new Error('手机验证码由数字和大写字母组成，请重新填写！'))
  else c()
}

/**
 * 电子邮箱校验
 * @param r
 * @param v
 * @param c
 */
const email = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入电子邮箱！'))
  else if (!Regulars.email(v)) c(new Error('邮箱格式错误，校验失败！'))
  else c()
}

/**
 * 用户名、账户名校验
 * @param r
 * @param v
 * @param c
 */
const username = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入用户名！'))
  else if (v.length < 4 || v.length > 16) c(new Error('请输入4至16位用户名！'))
  else if (!Regulars.username(v)) c(new Error('用户名须以英文字母开头，允许数字和特殊字符 "." "_" "@"。'))
  else c()
}

/**
 * 密码校验
 * @param r
 * @param v
 * @param c
 * @param rule {boolean} 是否进行密码规则校验
 */
const password = (r, v, c, rule) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入密码！'))
  else if (v.length < 6 || v.length > 18) c(new Error('请输入6至18位密码！'))
  else if (rule && !Regulars.password(v)) c(new Error('密码应包含大写、小写英文字母和数字，不能有特殊符号！'))
  else c()
}

/**
 * 密码设置校验
 * @param r
 * @param v
 * @param c
 */
const passwordSetting = (r, v, c) => {
  password(r, v, c, true)
}

/**
 * 密码登录校验
 * @param r
 * @param v
 * @param c
 */
const passwordLogin = (r, v, c) => {
  password(r, v, c)
}

/**
 * 身份证号码校验
 * @param r
 * @param v
 * @param c
 */
const IDCard = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入身份证号码！'))
  else if (v.length !== 15 && v.length !== 18) c(new Error('请输入正确的15或18位身份证号码！'))
  else if (!Regulars.IDCard(v)) c(new Error('请输入正确的身份证号码！'))
  else c()
}

/**
 * 姓名校验
 * @param r
 * @param v
 * @param c
 */
const name = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('姓名不能为空，请输入！'))
  else if (v.length < 2 || v.length > 4) c(new Error('您输入的姓名超出规定长度！'))
  else if (!Regulars.chinese(v)) c(new Error('请输入正确的中文姓名！'))
  else c()
}

/**
 * 邮政编码校验
 * @param r
 * @param v
 * @param c
 */
const postcode = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入邮政编码！'))
  else if (v.length !== 6) c(new Error('邮政编码由6位数字组成，请正确填写！'))
  else if (!Regulars.postcode(v)) c(new Error('请输入正确的邮政编码！'))
  else c()
}

/**
 * 银行卡卡号有效性校验
 * @param r
 * @param v
 * @param c
 */
const bankcard = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入您的银行账户！'))
  else if (!Regulars.number(v)) c(new Error('请输入正确的银行账户！'))
  else c()
}

/**
 * 组织机构代码校验
 * @param r
 * @param v
 * @param c
 */
const orgCode = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入组织机构代码！'))
  else if (v.length !== 9) c(new Error('组织机构代码由9位字符组成，请重新填写！'))
  else if (!Regulars.orgCode(v)) c(new Error('校验失败，请重新填写！'))
  else c()
}

/**
 * 纳税人识别号校验
 * @param r
 * @param v
 * @param c
 */
const taxpayerCode = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入纳税人识别号！'))
  else if (v.length !== 15) c(new Error('纳税人识别号由15位字符组成，请重新填写！'))
  else if (!Regulars.taxpayerCode(v)) c(new Error('校验失败，请重新填写！'))
  else c()
}

/**
 * 统一社会信用代码
 * @param r
 * @param v
 * @param c
 */
const unifiedSocialCreditCode = (r, v, c) => {
  if (!v || Regulars.empty(v)) c(new Error('请输入统一社会信用代码！'))
  else if (v.length !== 18) c(new Error('统一社会信用代码由18位字符组成，请重新填写！'))
  else if (!Regulars.unifiedSocialCreditCode(v)) c(new Error('校验失败，请重新填写！'))
  else c()
}

export default {
  required,
  currency,
  mobile,
  phone,
  captcha,
  email,
  username,
  passwordSetting,
  passwordLogin,
  IDCard,
  name,
  postcode,
  bankcard,
  orgCode,
  taxpayerCode,
  unifiedSocialCreditCode
}
