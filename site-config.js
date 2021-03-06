const descriptionMd = `سامانه‌ی ثبت سفارش آنلاین`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'کات‌کن | داشبورد',
  descriptionMd,
  description,
  url: 'https://app.cutkon.com',
  twitterUsername: '@Cutkon',
  email: 'info@cutkon.com',
  socials: {
    // GitIHub: 'https://github.com/',
    Twitter: 'https://twitter.com/Cutkon.ir',
    Instagram : "https://instagram.com/cutkon.ir"
  },
  bgColor: '#1A202C',
  themeColor: '#00baba',
  version : "۰.۱۸",
}
