# Change Log

All notable changes to the "ChatGPT - EasyCode" extension will be documented in this file.

## [1.2.2]

- Added support for gpt-4-1106-preview
- GPT-4 credit packs are now updated to use the new model pricing (5$ / 450,000) input tokens

## [1.2.1]

- Fixed bug with missing characters during streaming
- Added error messages related to placeholder accounts
- Added support for Alipay and Wechat pay (for chinese users)

## [1.2.0]

- Fixed bug with 'undefined status' when attempting to ask codebase
- Improved speed of codebase indexing
- Changed ask codebase to be more specific on details
- Codebase Indexing Free Plan now supports 2000 files (up from 200)
    - Rate limit for usage still applies
- Codebase Pro supports up to 4000 files

## [1.1.9]

- Improved go to reference accuracy
- Improved ask codebase quality
- fixed bug around determining whether codebase required re-indexing
- fixed bug with old chat conversations using incorrect model
- fixed UI bug with file tree being rendered with inconsistent spacing
- fixed bug with in-line autocomplete not working

## [1.1.8]

- Improved error logging for new webview UI and on server side

## [1.1.7]

- Added a git commit message generator to the source control tab of vscode. This will look at your file diffs and generate a commit message of the changes.

## [1.1.6]

- Added an easycode .ignore file, which is populated with default gitignores and can be configured. This is used instead of configuring the project's .gitignore
- Fixed an issue causing the file tree in the ask codebase panel to not be scrollable
- Added an ask codebase error message for when codebase is not indexed yet
- Fixed sign up button for trial accounts not redirecting correctly to the signup page
- Fixed a bug where try without account users are able to purchase upgrades

## [1.1.5]

- Added support for .dart files (for flutter projects)

## [1.1.4]

- Fixed upgrade link for codebase pro pointing incorrectly to gpt-3.5-pro

## [1.1.3]

- Completely Redesigned UI & UX
    - Improved response time for all messages by 0.25-0.75 seconds
    - Improvement is most noticeable when NOT using your own api key. This is due to the nodeJS library being slower than the python library on server
    - Theme of the extension now matches the color of your VSCode theme (working for default dark and light themes)
    - Theme will now change in real time when you change your VSCode Theme
    - Syntax highlighting has been upgraded to match VSCode theme better and be more correct based on the coding language

- Added a go to reference feature to ask codebase conversations
    - To activate this, click on a sentence or popped up text in an ask codebase answer
    - It will try to find the file and code where it got its answer from
    - References are now stored for old ask codebase conversations

- Temporary removed some features due to the UI/UX redesign:
    - Removed code runner, will be added back later
    - Removed prompt assist, will be added back later
    - Removed prompt suggestions on new chats, will be added back later

- Bug Fixes:
    - Fixed an issue that caused unnecessary authentication requests
    - Fixed clear cache not logging user out and clearing cache correctly
    - Fixed an issue with index codebase not updating correctly due to optimizations. IF you notice your ask codebase not working correctly, please update to at least this version.
    - Fixed an issue with the conversation not being truncated correctly when context length has been exceeded.
    - Fixed an issue with account panel not updating in real-time
    - Fixed an issue that made it not possible to scroll up when chat is generating

## [1.1.2]

- Added max file limit to error notifier of ask codebase
- Added tooltip to exclude folders button
- Fixed a bug with the rate limit of ask codebase
- Added more description to the stripe payment page for ask codebase
- Fixed a capitalization bug inside the account info tooltip

## [1.1.1]

- Improved re-indexing times of ask codebase
- When ask codebase fails, it will now display how many files you tried to index.
- Added a button that allows you exclude folders from ask codebase via .gitignore
- Ask Codebase is now rate limited to 20 requests per month on the free plan
- Added a codebase pro plan
    - This increases the max number of files allowed by codebase indexing to 1000, and provides unlimited ask codebase requests
    - This also includes unlimited requests for GPT-3.5 (4k, 16k), and Claude-Instant-1
- Combined rate limits for GPT-3.5 (4k) GPT-3.5 (16K) and Claude-Instant-1 rate into one group

## [1.1.0]

- Changed system prompt for GPT-3 and GPT-4 to be coding focused
- Added a code context section for chats started through the context menu with code selected
    - Insert and Diff Code will use this code context for the insertion location (if code context exists)
- Removed the textbox expander/collapser (this will be re-built to be more intuitive in the future)

## [1.0.9]

- Added a button to the upgrade tab to manage your subscription

## [1.0.8]

- Added a code runner feature that allows you to run code inside the chat tab!
    - This will use your currently installed language libraries to run the code inside a code block
    - Output run like this can be fed back to GPT for follow-ups
    - Current languages supported are python, javascript, shell, batch, and java
- Code blocks now show the language on the top

## [1.0.7]

- Fixed an issue that causes the extension to become non-responsive when a large project with many files are open

## [1.0.6]

- Improved Ask Web Feature
    - Fixed a bug where ask web gets stuck indefinitely and no results get returned
    - Average Latency decreased from 9 seconds to 4 seconds
    - Now displays and reads from 5 results instead of 3
- Fixed the "explain" code lens


## [1.0.5]

- Improved Ask Codebase Algorithm
    - It is more intelligent on a high level understanding
    - Ask Codebase will no longer work for projects with over 200 files
        - Indexing codebase will now error out for projects that are too large
- Added Claude-Instant-1 as a model option
    - It is limited to 32k context
    - The primary purpose of this model is for ask codebase and web search
    - Rate limit is set at 5 / 20 minutes
- Adjusted GPT-3.5 rate limit to be 10 / 20 minutes
    - GPT-3.5-Pro plan now offers unlimited Claude-Instant-1
- Removed Explain Stack Trace Context Menu Option
    - This had low usage
- Removed Ask GPT: Explain how this method is being used
    - This had low usage and was not working without language packs
- Added Ask GPT: Fix Bug Context Menu Option
    - This is meant to be a convenience command since we are seeing many people trying to debug their code
- Added Ask GPT: Explain how this is used so it uses ask codebase
    - This is meant to be a high level explanation of a local piece of the code

## [1.0.4]

- Added a web browsing feature
    - This cannot be used on the free rate-limited GPT-4
- Added an insert code button and diff view button to code blocks

## [1.0.3]

- Switched default model to GPT-4 (rate-limited)

## [1.0.2]

- Added better error logging for client side

## [1.0.1]

- Fixed a bug with .gitignore support

## [1.0.0]

- Prompt Assist now works with ask codebase
    -It will ask codebase relevant questions
- Prompt Ideas will now be specific to codebase when ask codebase is selected
- Improved high level project understanding of ask codebase
- Fixed a UI bug with Ask Codebase icon being larger than other icons in the home page
- Fixed a bug with prompt ideas not showing properly on light theme

## [0.9.9]

- Added an option to automatically use the code in the active editor view as context
- Fixed a bug with the chat scrolling to the very top when there are large inputs

## [0.9.8]

- [EXPERIMENTAL] Added a prompt assistant to help guide vague prompts into specific ones
- Added prompt ideas to new tabs that are opened

## [0.9.7]

- Hotfix for gpt-4 giving an ask codebase error even when ask codebase is not checked

## [0.9.6]

- Hotfix for chat not working due to no api key set

## [0.9.5]

- Code lens is now default turned off (floating actions above code functions)
- Fixed bug where using own API key worked even without an API key

## [0.9.4]

- Added the ability to index github repositories
- Fixed a bug with not being able to use GPT-4 when using own API key
- Indexing codebase will now show a separate progress meter for each directory
- Indexing codebase will now index each directory one after the other
- Fixed bug with adding extra directories not working on linux and windows

## [0.9.3]

- hotfixed a bug that causes follow-up conversations to not work

## [0.9.2]

- Added a 5 day event where all users will receive 5 free GPT-4 requests every 4 hours
    - These free requests cannot be used for ask codebase
- Rate limits are now displayed when hovering over account information
- Fixed a bug that allowed users with no account to upgrade their plan
- Improved codebase indexing reliability due to OpenAI rate limits

## [0.9.1]

- Added GPT-3.5-Turbo-16k model support. This is free but rate limited at the same token amount as normal GPT-3.5-Turbo.
    - Subscribers to the gpt-3.5 pro plan will have unlimited access.
    - This can be used for codebase related questions with the large context size
    - We noticed this model may produce worse results than normal GPT-3.5, so we put a warning sign next to it.
- File tree automatically updates when files are added or removed
    - Folder removal is currently bugged
- You can no longer index codebase when its currently being indexed
- Added 2 additional code lens options
    - Ask EasyCode
    - Refactor

## [0.9.0]

- Added an option to add extra local directory folders for codebase indexing
    - This option does not work on windows currently
- Added a button to refresh index next to ask codebase that will refresh the file tree and update the index
- Fixed a bug that causes ask codebase to fail if files in directory are renamed or deleted, and index is not refreshed
- Updated support link
- Updated ReadMe

## [0.8.9]

- Added options in the chat window to select AI model and to use own open ai key
- Added quick capture feature to context menu
- Added a floating quick action above code functions that explains what the function does
- Added buttons to allow users to upvote/downvote conversations
    - This helps us determine what is helpful to users
- Codebase indexing has been revamped
    - users can select what files are included when asking codebase
        - By default, all project files are included
        - This helps narrow the AI's answers so it uses the contexts you care about
    - speed is vastly improved and supports projects of up to 2000 files
    - codebase indexing no longer requires language packs to be installed
    - more file formats are now supported, including json, md, yaml
- Data collection is now Opt-out
- Bug Fixes:
    - Fixed an issue where conversation errors out due to context length exceeding the models limits when using ask codebase

## [0.8.8]

- Fixed a bug with ask codebase erroring out

## [0.8.7]

- BUG fix: Do not use version 0.8.6!

## [0.8.6]

- Improved streaming stability

## [0.8.5]

- Improved streaming bandwidth efficiency

## [0.8.4]

- Improved streaming stability

## [0.8.3]

- Extension now supports countries where openai api access is blocked

## [0.8.2]

- Security update, you must update to this version or else extension will stop working

## [0.8.1]

- Fixed a bug with textbox height not resetting when switching tabs

## [0.8.0]

- Adjusted rate limiter for in-line autocomplete

## [0.7.9]

- [EXPERIMENTAL] Added back in-line autocompletions. They are now much faster than before
- Textboxes are now fixed-height by default. Added an option to expand and collapse them

## [0.7.8]

- Fixed a bug that causes the persistent error: "An error occurred while loading view: easycode.chatView"

## [0.7.7]

- Added support for vscode light themes
- Fixed a bug where pressing enter does not work when ask codebase is selected

## [0.7.6]

- Fixed a bug where GPT-4 tokens get deduced when openai call fails
- Max tokens can now only contain a maximum of 2000 tokens
- Fixed a bug that causes 400 error when max token is set to too high
- Changed icon

## [0.7.5]

- Added an opt-in option for data collection. This is turned off by default.
- Increased padding on message tabs
- Fixed an error with messages being generated on the wrong tab
- Closing a tab will now automatically switch to the nearest tab
- Fixed a bug where nothing is generated when all tabs have been closed

## [0.7.4]

- Added a backup openai server in case the primary one fails. This will not handle all openai errors

## [0.7.3]

- Added more logging for errors

## [0.7.2]

- Added better logging for errors

## [0.7.1]

- Hotfix for bug that causes GPT-4 to not work

## [0.7.0]

- Made error messages more verbose for OpenAI errors
- AI is now aware whether it is GPT-4 or GPT-3
- Fixed a bug with the wrong tab's conversation being used during follow-up questions
- Fixed a bug where a follow-up message cannot be sent
- Fixed a warning with syntax highlighting and HTML not being escaped
- Fixed a bug with HTML code generated not rendering properly when not inside a code block

## [0.6.9]

- Added an option to provide your own OpenAI api key. Using your own key will not be rate-limited

## [0.6.8]

- Added an option to clear extension cache

## [0.6.7]

- Added GPT-3.5 Pro Plan

## [0.6.6]

- Fixed bug with code blocks not rendering colors properly
- Updated icon and description due to GPT-4 availability
- Fixed issue with password reset not being sent out
- Added a new button for copying code blocks

## [0.6.5]

- Fixed bug where GPT-4 users are still running into the rate limiter


## [0.6.4]

- Added support for chat history [stored locally]
- Code selected is now added into the input box
- Added GPT-4 credit packs
- Made chat input box more robust to whats being copied in
- Chat input box now shows selected code

## [0.6.3]

- Removed GPT-4 credits for new free users
- Changed extension name
- Removed the experimental github copilot feature

## [0.6.2]

- Adjusted GPT-4 credits for free users

## [0.6.1]

- Security update

## [0.6.0]

- Added support for multiple lines in the input box
- Added better message for codebase indexing
- Changed the upgrade button to a gold color
- Adjusted GPT-4 credits for free users

## [0.5.9]

- Added a password reset form

## [0.5.8]

- Added an announcement footer that can display announcement and update messages

## [0.5.7]

- Slightly sped up inline autocomplete
- Inline autocomplete now shows when it has failed to think of a suggestion
- Inline autocomplete now uses GPT-4 tokens
- Fixed a bug that prevented people from trying the extension without an account
- Fixed a bug that caused the app to become unresponsive and the server response to become delayed
- Adjusted rate limit and GPT-4 tokens for free users

## [0.5.6]

- Fixed discord link inside the extension

## [0.5.5]

- Fixed a bug for users who do not have accounts

## [0.5.4]

- Removed login requirement for users who do not have yet have accounts
- Fixed an issue with inline autocomplete hotkey (shift+tab) overriding default behaviour to reverse indents

## [0.5.3]

- [EXPERIMENTAL] Added copilot-styled code autocomplete. Move your cursor anywhere in the code and press Shift+Tab to trigger this!
- Added support for editing conversations midway
- Extension only shows relevant editor menu options depending on whether you have code selected or not
- Bug Fixes:
    - Fixed a bug with overlapping text due to first bug fix
    - Fixed a bug with stop generation button not working

## [0.5.2]

- Fixed a UI bug where asking a new question does not stop the generation for the previous question so it has 2 conversations overlapping
- Fixed a bug with codebase indexing check mark not working after immediate codebase indexing
- Fixed a bug with the 20 minute rate limiter for paid users

## [0.5.1]

- Improved throttling issues for GPT-4 -> We can handle about 4x more tokens now!
- Added Write Unit Tests feature
- Added Refactor Code feature
- Added a button to stop generations midway
- Changed ask codebase logic into a checkbox instead of toggle
- Changed links for codebase references from buttons into text to not conflict with stop generation button

## [0.5.0]

- Moved some logic to the server to improve robustness without requiring patching the extension
- Revamped UI
    - Added toggle to the chat between ask codebase and ask internet
    - You can now press enter to submit input
    - Added link for discord server
    - Added link for extension settings
    - Added index codebase To command pallete
    - Added link to navigate back to features page
- Added error message for openai throttling
- An account is now required
- Added a paid plan. Free plan stays the same.

## [0.4.8]

- Hotfix for OpenAI outage

## [0.4.7]

- Fixed OpenAI Bug

## [0.4.6]

- Added additional language support. Please note that you must have the language pack installed BEFORE codebase is indexed
- Added Golang support
- Added PHP support
- Added C support
- Added C++ support
- Added Ruby Support
- Updated documentation

## [0.4.5]

- Changed rate limit

## [0.4.4]

- Changed Icon

## [0.4.3]

- Removed Outdated Info From README

## [0.4.2]

- Added model settings explanation to documentation

## [0.4.1]

- Added gpt-3.5-turbo and gpt-4 [Heavily Rate Limited]
- Renaming of extension

## [0.4.0]

- Clicking code and text generated in answers will now try to reference the codebase [This is an experimental feature]
- Changed codebase indexing to also incorporate file names. Ask codebase will now take into account file names when generating answers
- Index codebase will now ignore all files found in .gitignore
- Removed outdated commands from the command pallete

## [0.3.6]

- Sped up text generation speed for long responses with code examples and chat histories

## [0.3.5]

- Fixed bug with explain file flow not explaining files

## [0.3.4]

- Added stack trace explanations
- Changed category to other
- Changed startup logic to start when VSCode Starts

## [0.3.3]

-Updated README

## [0.3.2]

- Fixed indexing codebase bug on old version of vscode on windows that do not support ES 2022 which prevented files from being processed
- Added an error message for indexing codebase when there is no current active project
- Added a check to prevent asking codebase when the prompt is empty
- Fixed a UX bug where two buttons showing "ask codebase" is displayed

## [0.3.1]

- Added visual studio styled syntax highlighting for code

## [0.3.0]

- Added support for visual studio code version 1.6.1 and up (instead of 1.6.5 and up)

## [0.2.9]

- Added user email requirement
- Added support for visual studio code version 1.6.5 and up (instead of 1.7.3 and up)

## [0.2.6]

- Changed changelog
- Changed UX so index codebase happens automatically when user presses ask codebase button

## [0.2.5]

- Changed title and description

## [0.2.4]

- Fixed a bug for tutorial view the text does not disappear

## [0.2.3]

- Added support for Lua Language [Requires Lua Extension Pack To Work Well]
- Changed category tags of extension
- Fixed UX bug for tutorial view

## [0.2.2]

- Initial Launch
