const inquirer = require('inquirer')
const { isNil } = require('lodash')

const readme = require('./readme')
const projectInfos = require('./project-infos')
const questionsBuilders = require('./questions')
const utils = require('./utils')

/**
 * Ask user questions and return context to generate a README
 *
 * @param {Object} projectInfos
 */
const askQuestions = async (projectInfos, skipQuestions) => {
  let answersContext = {
    isGithubRepos: projectInfos.isGithubRepos,
    repositoryUrl: projectInfos.repositoryUrl,
    projectPrerequisites: undefined
  }

  for (const questionBuilder of Object.values(questionsBuilders)) {
    const question = questionBuilder(projectInfos, answersContext)

    if (!isNil(question)) {
      const currentAnswerContext = skipQuestions
        ? { [question.name]: question.default }
        : await inquirer.prompt([question])

      answersContext = {
        ...answersContext,
        ...currentAnswerContext
      }
    }
  }

  return answersContext
}

/**
 * Main process:
 * 1) Gather project infos
 * 2) Ask user questions
 * 3) Build README content
 * 4) Create README.md file
 *
 * @param {Object} args
 */
const mainProcess = async ({ template, yes }) => {
  const projectInformations = await projectInfos.getProjectInfos()
  const answersContext = await cli.askQuestions(projectInformations, yes)
  const readmeContent = await readme.buildReadmeContent(
    answersContext,
    template
  )

  await readme.writeReadme(readmeContent)

  utils.showEndMessage()
}

const cli = {
  mainProcess,
  askQuestions
}

module.exports = cli
