const descriptionMd = `سامانه‌ی ثبت سفارش`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'کات‌کن',
  descriptionMd,
  description,
  url: 'https://cutkon.com',
  twitterUsername: '@Cutkon',
  email: 'hi@cutkon.com',
  socials: {
    GitIHub: 'https://github.com/',
    Twitter: 'https://twitter.com/Cutkon.ir',
    Instagram : "https://instagram.com/cutkon.ir"
  },
  bgColor: '#1A202C',
  themeColor: '#00baba',
}
