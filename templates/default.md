<h1 align="center">Welcome to <%= projectName %> 👋</h1>
<p>
<% if (projectVersion) { -%>
  <img src="https://img.shields.io/badge/version-<%= projectVersion %>-blue.svg?cacheSeconds=2592000" />
<% } -%>
<% if (projectPrerequisites) { -%>
<% projectPrerequisites.map(({ name, value }) => { -%>
  <img src="https://img.shields.io/badge/<%= name %>-<%= encodeURIComponent(value) %>-brightgreen.svg" />
<% }) -%>
<% } -%>
<% if (projectDocumentationUrl) { -%>
  <a href="<%= projectDocumentationUrl %>">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
<% } -%>
<% if (isGithubRepos) { -%>
  <a href="<%= repositoryUrl %>/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
<% } -%>
<% if (licenseName && licenseUrl) { -%>
  <a href="<%= licenseUrl %>">
    <img alt="License: <%= licenseName %>" src="https://img.shields.io/badge/License-<%= licenseName %>-yellow.svg" target="_blank" />
  </a>
<% } -%>
<% if (authorTwitterUsername) { -%>
  <a href="https://twitter.com/<%= authorTwitterUsername %>">
    <img alt="Twitter: <%= authorTwitterUsername %>" src="https://img.shields.io/twitter/follow/<%= authorTwitterUsername %>.svg?style=social" target="_blank" />
  </a>
<% } -%>
</p>
<% if (projectDescription) { -%>

> <%= projectDescription %>
<% } -%>
<% if (projectHomepage) { -%>

### 🏠 [Homepage](<%= projectHomepage %>)
<% } -%>
<% if (projectPrerequisites) { -%>

## Prerequisites

<% projectPrerequisites.map(({ name, value }) => { -%>
- <%= name %> <%= value %>
<% }) -%>
<% } -%>
<% if (installCommand) { -%>

## Install

```sh
<%= installCommand %>
```
<% } -%>
<% if (usage) { -%>

## Usage

```sh
<%= usage %>
```
<% } -%>
<% if (testCommand) { -%>

## Run tests

```sh
<%= testCommand %>
```
<% } -%>
<% if (authorName || authorTwitterUsername || authorGithubUsername) { -%>

## Author
<% if (authorName) { %>
👤 **<%= authorName %>**
<% } %>
<% if (authorTwitterUsername) { -%>
* Twitter: [@<%= authorTwitterUsername %>](https://twitter.com/<%= authorTwitterUsername %>)
<% } -%>
<% if (authorGithubUsername) { -%>
* Github: [@<%= authorGithubUsername %>](https://github.com/<%= authorGithubUsername %>)
<% } -%>
<% } -%>
<% if (contributingUrl) { -%>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](<%= contributingUrl %>).
<% } -%>

## Show your support

Give a ⭐️ if this project helped you!
<% if (licenseName && licenseUrl) { -%>

## 📝 License

<% if (authorName && authorGithubUsername) { -%>
Copyright © <%= currentYear %> [<%= authorName %>](https://github.com/<%= authorGithubUsername %>).<br />
<% } -%>
This project is [<%= licenseName %>](<%= licenseUrl %>) licensed.
<% } -%>

***
<%- include('footer.md'); -%>
