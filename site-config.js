const descriptionMd = `Cut kon `

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'Cut kon',
  descriptionMd,
  description,
  url: 'https://cutkon.com',
  twitterUsername: '@Cutkon',
  email: 'hi@cutkon.ir',
  socials: {
    GitHub: 'https://github.com/',
    Twitter: 'https://twitter.com/Cutkon',
  },
  bgColor: '#1A202C',
  themeColor: '#46c0aE',
}
