<h1 align="center">Welcome to readme-md-generator 👋</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/readme-md-generator.svg?orange=blue" />
  <a href="https://www.npmjs.com/package/readme-md-generator">
    <img alt="downloads" src="https://img.shields.io/npm/dm/readme-md-generator.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://codecov.io/gh/kefranabg/readme-md-generator">
    <img src="https://codecov.io/gh/kefranabg/readme-md-generator/branch/master/graph/badge.svg" />
  </a>  
  <a href="https://twitter.com/FranckAbgrall">
    <img alt="Twitter: FranckAbgrall" src="https://img.shields.io/twitter/follow/FranckAbgrall.svg?style=social" target="_blank" />
  </a>
</p>

> CLI that generates beautiful README.md files.<br /> `readme-md-generator` will suggest you default answers by reading your `package.json` and `git` configuration.

## ✨ Demo

`readme-md-generator` is able to read your environment (package.json, git config...) to suggest you default answers during the `README.md` creation process:

<p align="center">
  <img width="700" align="center" src="https://user-images.githubusercontent.com/9840435/59459416-07f1e580-8e1d-11e9-89e7-6a5e6b373e93.gif" alt="demo"/>
</p>

Generated `README.md`:

<p align="center">
  <img width="700" src="https://user-images.githubusercontent.com/9840435/59458494-d7a94780-8e1a-11e9-9103-42639c347c38.jpg" alt="cli output"/>
</p>

Example of `package.json` with good meta data:

```json
// The package.json is not required to run README-MD-GENERATOR
{
  "name": "readme-md-generator",
  "version": "0.1.3",
  "description": "CLI that generates beautiful README.md files.",
  "author": "Franck Abgrall",
  "license": "MIT",
  "homepage": "https://github.com/kefranabg/readme-md-generator#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kefranabg/readme-md-generator.git"
  },
  "bugs": {
    "url": "https://github.com/kefranabg/readme-md-generator/issues"
  },
  "engines": {
    "npm": ">=5.5.0",
    "node": ">=9.3.0"
  }
}
```

## 🚀 Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since npm `5.2.0`)

Just run the following command at the root of your project and answer questions:

```sh
npx readme-md-generator
```

OR use default values for all questions (`-y, --yes`):

```sh
npx readme-md-generator -y
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/kefranabg/readme-md-generator/issues) if you want to contribute.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://www.franck-abgrall.me/"><img src="https://avatars3.githubusercontent.com/u/9840435?v=4" width="75px;" alt="Franck Abgrall"/><br /><sub><b>Franck Abgrall</b></sub></a><br /><a href="https://github.com/kefranabg/readme-md-generator/commits?author=kefranabg" title="Code">💻</a> <a href="https://github.com/kefranabg/readme-md-generator/commits?author=kefranabg" title="Documentation">📖</a> <a href="https://github.com/kefranabg/readme-md-generator/commits?author=kefranabg" title="Tests">⚠️</a> <a href="#question-kefranabg" title="Answering Questions">💬</a> <a href="https://github.com/kefranabg/readme-md-generator/issues?q=author%3Akefranabg" title="Bug reports">🐛</a> <a href="#maintenance-kefranabg" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://yann-bertrand.fr/"><img src="https://avatars0.githubusercontent.com/u/5855339?v=4" width="75px;" alt="Yann Bertrand"/><br /><sub><b>Yann Bertrand</b></sub></a><br /><a href="https://github.com/kefranabg/readme-md-generator/commits?author=yannbertrand" title="Code">💻</a> <a href="https://github.com/kefranabg/readme-md-generator/commits?author=yannbertrand" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://nikx.io"><img src="https://avatars2.githubusercontent.com/u/3141005?v=4" width="75px;" alt="Nik"/><br /><sub><b>Nik</b></sub></a><br /><a href="https://github.com/kefranabg/readme-md-generator/commits?author=NikxDa" title="Code">💻</a> <a href="https://github.com/kefranabg/readme-md-generator/commits?author=NikxDa" title="Documentation">📖</a> <a href="https://github.com/kefranabg/readme-md-generator/commits?author=NikxDa" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/ssoobratty"><img src="https://avatars3.githubusercontent.com/u/7631054?v=4" width="75px;" alt="Saffaanh Soobratty"/><br /><sub><b>Saffaanh Soobratty</b></sub></a><br /><a href="https://github.com/kefranabg/readme-md-generator/commits?author=ssoobratty" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/samit4me"><img src="https://avatars3.githubusercontent.com/u/3248531?v=4" width="75px;" alt="Samuel Sharpe"/><br /><sub><b>Samuel Sharpe</b></sub></a><br /><a href="https://github.com/kefranabg/readme-md-generator/commits?author=samit4me" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/apatrascu"><img src="https://avatars3.githubusercontent.com/u/1193770?v=4" width="75px;" alt="Alecsandru Patrascu"/><br /><sub><b>Alecsandru Patrascu</b></sub></a><br /><a href="https://github.com/kefranabg/readme-md-generator/commits?author=apatrascu" title="Code">💻</a></td>
    <td align="center"><a href="http://milad.nekofar.com"><img src="https://avatars3.githubusercontent.com/u/147401?v=4" width="75px;" alt="Milad Nekofar"/><br /><sub><b>Milad Nekofar</b></sub></a><br /><a href="https://github.com/kefranabg/readme-md-generator/commits?author=nekofar" title="Code">💻</a> <a href="https://github.com/kefranabg/readme-md-generator/commits?author=nekofar" title="Tests">⚠️</a> <a href="#ideas-nekofar" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/hgb123"><img src="https://avatars0.githubusercontent.com/u/18468577?v=4" width="75px;" alt="Bao Ho"/><br /><sub><b>Bao Ho</b></sub></a><br /><a href="https://github.com/kefranabg/readme-md-generator/commits?author=hgb123" title="Code">💻</a> <a href="https://github.com/kefranabg/readme-md-generator/commits?author=hgb123" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Author

👤 **Franck Abgrall**

- Twitter: [@FranckAbgrall](https://twitter.com/FranckAbgrall)
- Github: [@kefranabg](https://github.com/kefranabg)

## Show your support

Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/FranckAbgrall">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2019 [Franck Abgrall](https://github.com/kefranabg).<br />
This project is [MIT](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
