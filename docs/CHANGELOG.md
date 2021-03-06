
# 1.0.12

- Fixed analytics around number of documents in the repository

- The "Delete" text is now danger red.  

- Implemented a confirm prompt when deleteing flashcards, comments, and 
  annotations.

- Implemented Cancel when creating flashcards and comments 

- reworked anki sync to run from teh doc repository.

- renamed "Copy URL" to "Copy Original URL"

# 1.0.11

- release to fix MacOS certificate bugs

# 1.0.10

- banner message about opencollective donations

- Change capture key binding to CommandOrControl+N (new).  The other key binding 
  conflicted with window management in Chrome and we might want to use those
  key bindings in the future.

- STASH files can be added directly as a backend file just like images and video
  which means that they could work with the future firebase store.  

- refactored the way we're handling popups for the annotation bar.  I think this
  will resolve most of the issues we're having but there are still a few more 
  glitches to be fixed.  

- If any of the input tags were invalid, they were ALL ignored.  Which is bad.

- Fixed ugly bug where percentags can be > 100% but only slightly.

- reworked the preview browser so that buttons are only enabled after you first
  load a URL so that it's not confusing for the user.

# 1.0.9

- release to fix MacOS release breakage.

# 1.0.8

- ability to enable fetching the auto-update from a pre-release

- the capture preview now expands the content once it's loaded.  One issue here 
  is that some documents appear too long.  I think it is an issue with computing
  the scroll height reliably and I'm still figuring this part out. 

- when capture preview is running we now set a title

# 1.0.7

- another release to fix Windows by upgrading sentinel

# 1.0.6

- changes to analytics and a rapid release for fixing Windows. 


# 1.0.5 

- more browsers for larger documents (desktop).

- link to discord in the menu box.

- emit an event for the number of documents loaded in the document repository

- Snaps should be supported now.  No more segfaults.

- Annotation sidebar now supports:
    - delete flashcard + comment
    - delete text annotation
    - menu for text-annotation to create flashcard + comment

- Capture now has a key binding: CommandOrControl+Shift+W

- Text highlights no longer being saved to JSON.. migrating them to the file 
  repo...

# 1.0.4

- Tags are stored with anki notes now.  They weren't before but they're critical
  to making our anki support work better. 

- We now have a basic but imperfect settings systems that allows us to persist
  various changes locally .. Will need to be refactored a bit in the future to
  make it more MVC and to work better with react.

- nr of annotations column to show / highlight documents which are annotated
  most.

- tags column which isn't enabled by default.

- improve double click handling to make sure we have a set of isolated single 
  click columns.

- merged PR from xuebingli to handle double click on columns intended to be 
  single click. 

    https://github.com/burtonator/polar-bookshelf/pull/303

- Fixed a bug where some pages weren't properly expanding when they were first
  loaded. 

- Fixed GA tracking of events which weren't sending before. Need this to 
  determine which features are being used.   

- Ability to click on the pulldown in the document repository to the right and 
  copy the URL for a document that was captured.

- Fixed bug where capture wouldn't generate a completely unique URL for storage
  on the file system and if you captured two URLs with the same title the 
  later one would update the former one.  We now include the a hash prefix of
  the SHA384 in the filename for uniqueness.

# 1.0.3

- Put ToS, cookie policy, and privacy policy in the about links so that people
  can get access to these easily.

- Super fast double click on text no longer brings up the annotation box.  Only
  more explicit highlights where the suer drags their mouse.

- Webaudio is enabled now. I had disabled it before as it's annoying when
  capture is running but we need it for video support to work properly.  

- PHZ files were not actually being compressed. Just stored.  Weird bug with 
  the API in jszip which made it easy to accidentally disable compression.  
  PHZ files will be 3x smaller in this release.    

- Upgraded to the latest sentry. I think there snap bug is related to sentry 
  but I'm not sure yet.  The snap packages weren't working but maybe they will
  in this release. 

- Upgraded to latest packages:
    - firebase
    - react
    - split.js
    - reactstrap

- Anki now properly uses the deck: tag when writing to decks.

- Initial support for Youtube video embeds.  We had NO support for youtube in 
  the past so even though this is minimal it's better than what we currently 
  have.

# 1.0.2

- The delete document prompt now has a subtitle to note that you will also lose
  the annotations.

- Border around the webview so you can see which part of the page is the doc.

- On OS X it's common to re-create a window in the app when the
  dock icon is clicked and there are no other windows open. The way
  we handle this now is that if there are no windows open we re-create
  the document repository so they can select one. Otherwise we just
  re-focus the most recently used window.

- Deleting documents in the UI app repository is implemented.

- Deleting documents from the repository via API is implemented.

- Upgrade to latest reactstrap 

- Show the data dir path when loading help | about so that people can easily
  figure out where their data is being stored.

- Ability to set titles for documents in the doc repository

- Using Electron 3.0.4

# 1.0.1

- This build should make manual auto-updates work. 

- Fixed a bug with some PDFs not opening properly

- Fixed bug with split.js by upgrading and also fixed some issues with rendering
  the page initially with split.js which caused it to re-snap and re-center
  itself.

# 1.0.0

- calling this version 1.0.0.  We are mostly feature complete.  There are a few
  things lacking but this way we can start getting more feedback as we're very 
  stable and people shouldn't assume the app is beta just becuase we're lacking
  a few features.

- Zip target was not provided for MacOS so auto-update was not working. 
  Hopefully it will in the next release.
  
- started adding the infra to add file attachments to the store 

# 1.0.0-beta211

- using persistent sessions now so GA metrics should be more accurate

- message on the top of the doc repo so I can start using the polar user base 
  more aggressively to help us out and contribute as a group.  

- improved the look of the sidebar a bit...

# 1.0.0-beta210

 - new 'toggle annotation sidebar' for the viewer mode.
 
 - manual updates might be set
 
 - more GA changes so I can track and improve polar usage

# 1.0.0-beta200

 - multiple color highlights
 
 - you can now jump from annotations in the sidebar to the part in the document
   where that annotation lies
   
 - annotation bar which pops up when you select text.
 
 - document repository now has last updated column
 
 - document repository now prints a better date format by default.  

# 1.0.0-beta190

 - all future releases will automatically make it into snap and this is now a 
   supported platform.

 - DMG file size down from 300MB to 111MB.  

 - The user can now change browser profiles and change to two new profiles for
   desktop browsers. 

 - Fixed bug where some pages wouldn't load properly in capture due to module
   resolution conflict. 
 
 - Fixed security issue. Please upgrade.  
 
 - Windows binaries should now be signed!

# 1.0.0-beta180

- Mac OS builds are now signed.

- New capture browser bar that is much prettier and more usable than the current
  browser bar and based on react.
  
- new / updated capture system allows the user to change the device being 
  emulated for pages that are tricky to capture.

- Updated large number of dependencies

- Electron 3.0.0

- new (initial) annotation sidebar for navigating and creating additional 
  annotations. 

# 1.0.0-beta170

- New tagging UI for the repository. Documents can have tags and and properly 
  filter them.  Tags follow twitter hashtag constraints.  

- Fixed issue with circular structure when logging.

- Fixed document repository corruption bug

# 1.0.0-beta160

- Fixed corruption issue regarding the store when two documents are open and one
  is updated.
  
- Using intercept stream protocol instead of intercept buffer protocol. Should
  fix a number of major problems regarding capture.
  
- Fixed capture issue around document corruption and some races after capture
  launched.

# 1.0.0-beta152

- Fixed potential race creating directories

- new build targets to make a new / local deb/snap without pushing them.

- Fixed bug if a single DocMeta file is broken

- Update to Electron 3.0 beta 12.

# 1.0.0-beta150

- new browser based capture system.

- Fixed bug where we could accidentally put the user in a situation where they
  can lock themselves out of the document repository.

# 1.0.0-beta141

- Fixed issue with repository generating errors when no files were in the repo

- Fixed issue with Files API returning empty exceptions which prevented debugging
  when in production.
  
- We now write errors to ~/.polar/logs/error.log which should make it easier for 
  users to help us find problems in production.

# 1.0.0-beta140

- Electron 3.0 beta 10

- Document Repository now supports the following features:

    - flagging files 
    - archiving files
    - filtering files by flagged only
    - filtering files to hide archived files.

# 1.0.0-beta133

- improved spectron tests
- migrated to chai everywhere for assert
- more windows bug fixes.

# 1.0.0-beta132

- Fixed hopefully the last Windows issue. This was due to not awaiting a promise
  where on Linux it was unnecessary.

# 1.0.0-beta131

- Fixed a major Windows regression in pagemarks.

# 1.0.0-beta130

- AHA.. We were not using Electron 3.0 beta8.. we were still stuck on beta5 
  due to an electron-builder issue. 

# 1.0.0-beta129

- Improved how we create TextHighlight to avoid type issues.

- Notes and Questions properly typed

- BaseHighlight.rects properly typed now. 

- TextHighlight properly using string | Text for the text of a highlight.

- FAQ updated for how to enable advanced logging.

- FAQ updated to build from source. 

- Fixed logging issue where we might have been swallowing an uncaught exception.

- Fixed bug where Polar is running and the user double clicks on the app again
  and nothing happens.

- Removed # in URL for sync app since it's no longer needed and prevented
  execution on Windows.

- Re-launch the app repository if polar is already running and the user clicks
  on the desktop icon.

# 1.0.0-beta128

- Updated logging to include the path when we can't open an AppPaths relative file.  

# 1.0.0-beta127
 
- Fixed a half dozen path separator bugs on Windows.

- Fixed potential Windows bug when importing PDF files into the repo and working
  with files in general.

# 1.0.0-beta126

- Sending error traces to Sentry

# 1.0.0-beta125

- Fixed more platform issues on Windows

# 1.0.0-beta120

- Fixed a number of important bugs with Windows

- Screenshots are now taken when text highlights are created.

- Improvements to HTML content generation when copying from the document.

- new Screenshots and Attachment support for object model. 

- crash reporter enabled for backtrace.io but only in a basic scenario.

- the renderer can write directly to disk now which improves performance

- Updated to beta 8 of Electron 3.0

- Spectron tests sort of working again.

- More data copied from the PHZ to the DocMeta including URL and filename.

- If you open a PDF file off disk it's imported into the stash now.

- Major logging system improvements. 

# 1.0.0-beta110

- If the PHZ file is wider than the window we're loading in we now expand the 
  window.

- Snap file distribution disabled at the moment. They don't work properly and 
  I need to take the time to build them correctly.  We have tar.

- Offset given to new windows so that it's not confused with the previous window.

- Better logging for additional performance. Default log level is INFO bug we 
  can change it later to WARN.  Include the source of the log event and the log
  level in messages now.  

- new document repository UI as standard. Supports viewing your documents as a 
  queue based on time, progress, filtering by document title, sorting by document,
  pagination of the documents in your repository, and double clicking to open 
  a document.

- AppAnalytics now sends userAgent to Google Analytics so we can track OS, 
  Browser version, app version, etc.  

- re-enabled opening a file from the command line.

- Started work on screenshots which are now disabled by default.  When you take
  a highlight the screenshots are stored as part of the annotation for future
  reference.   

- Went through and upgraded all apps to make sure electron-log was enable and 
  working properly.

- now using electron-log as our logger by default.  We now log to .polar/logs 
  and consolidate all the window log lines into one location.  This way users
  can debug their problems easier.

- big refactor of the main app into smaller components. Code is much more 
  manageable now.
  
- update electron-log version      

# 1.0.0-beta103

- deleted some of the pdf.js nav links as they were broken for the most part.

- Removed errant link to jquery-ui which was being fetched and probably slowing
  down the initial page load.

# 1.0.0-beta102

- Fixed Windows builds to have proper files for the .exe. Setup tested and it 
  works properly now. 

# 1.0.0-beta100

- Capture now using webview by default for captured content. Should be much much
  more reliable and usable. Prevents crashes on Linux.
  
- Windows builds now dramatically smaller.  From 300MB down to 75MB.  

- Migrated to ASAR builds which should significantly improve performance on Windows
 
- 64bit and 32bit Windows builds now available.

- Capturing now more reliable if it is aborted by the user.  Electron used to
  lock up.   

- Initial Anki sync working

- Flashcard input now fully working.  

- Ability to set titles for a document

- Initial support for pagemarks that can be 'ignored' and have a state so that
  you can say that you're ignoring a whole section of a doc and not that it's 
  been 'read'.

- Image sync works for Anki and we properly handle media files.

- Better integration with your primary browser. If you click on a link in a 
  captured page it opens in your browser.

- Started work on a video implementation to create notes+flashcards while watching
  a youtube video and keeping track of progress while watching it.  Will take a 
  while to have an implementation of this feature ready. 

# 1.0.0-beta10

- ability to easily toggle the devtools.

- --enable-dev-tools command line arg for starting with the dev tools already running

# 1.0.0-beta9

- reworked command line handling so that PDFs that are opened from the command
  line are opened in a new window.

- new "Open in New Window" menu option so that we can work with multiple PDF
  files.

# 1.0.0-beta8

- New windows were always maximized which was difficult to work with.

- Support opening multiple windows now.  We were constrained to just one window
  before.

# 1.0.0-beta7

- All PDF files are served via HTTP and webapp served via HTTP too which avoids
  some pdf.js bugs.
