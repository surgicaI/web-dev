## Text basics
this is *italic*  
this is **bold**  

this is `important` text  
percentage signs : % and `%`  

## some cool badges
[![Slack](https://bootstrap-slack.herokuapp.com/badge.svg)](https://bootstrap-slack.herokuapp.com)
[![Bower](https://img.shields.io/bower/v/bootstrap.svg)](https://bower.io/search/?q=bootstrap)
[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](https://www.npmjs.com/package/bootstrap)
[![Gem version](https://img.shields.io/gem/v/bootstrap.svg)](https://rubygems.org/gems/bootstrap)
[![Build Status](https://img.shields.io/travis/twbs/bootstrap/v4-dev.svg)](https://travis-ci.org/twbs/bootstrap)
[![devDependency Status](https://img.shields.io/david/dev/twbs/bootstrap.svg)](https://david-dm.org/twbs/bootstrap?type=dev)
[![Meteor Atmosphere](https://img.shields.io/badge/meteor-twbs%3Abootstrap-blue.svg)](https://atmospherejs.com/twbs/bootstrap)
[![Packagist Prerelease](https://img.shields.io/packagist/vpre/twbs/bootstrap.svg)](https://packagist.org/packages/twbs/bootstrap)
[![NuGet](https://img.shields.io/nuget/vpre/bootstrap.svg)](https://www.nuget.org/packages/bootstrap/absoluteLatest)

## Indentation
> Here is some indented text
>> even more indented

## Titles
# Big title (h1)
## Middle title (h2)
### Smaller title (h3)
#### and so on (hX)
##### and so on (hX)
###### and so on (hX)

## Example lists (1)

 - bullets can be `-`, `+`, or `*`
    - sub item 1

        with indented text inside


## Links

This is an [example inline link](http://lmgtfy.com/) and [another one with a title](http://lmgtfy.com/ "Hello, world").

Links can also be reference based : [reference 1][ref1] or [reference 2 with title][ref2].

References are usually placed at the bottom of the document

## Images

A sample image :

![revolunet logo](http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo")

As links, images can also use references instead of inline links :

![revolunet logo][revolunet-logo]


## Code

It's quite easy to show code in markdown files.

Backticks can be used to `highlight` some words.

Also, any indented block is considered a code block.  If `enable_highlight` is `true`, syntax highlighting will be included (for the builtin parser - the github parser does this automatically).

    <script>
        document.location = 'http://lmgtfy.com/?q=markdown+cheat+sheet';
    </script>


## GitHub Flavored Markdown

If you use the Github parser, you can use some of [Github Flavored Markdown][gfm] syntax :

 * User/Project@SHA: revolunet/sublimetext-markdown-preview@7da61badeda468b5019869d11000307e07e07401
 * User/Project#Issue: revolunet/sublimetext-markdown-preview#1
 * User : @revolunet

any type of code :

```python
import random

class CardGame(object):
    """ a sample python class """
    NB_CARDS = 32
    def __init__(self, cards=5):
        self.cards = random.sample(range(self.NB_CARDS), 5)
        print 'ready to play'
```

## Emoji Support
The Github Markdown also brings some [nice Emoji support][emoji] : :+1: :heart: :beer:


## Parsers and Extensions

Markdown Preview comes with **Python-Markdown** preloaded.

### *Python-Markdown*

The [Python-Markdown Parser][] provides support for several extensions.

[Python-Markdown Parser]: https://github.com/waylan/Python-Markdown

#### Extra Extensions

* `abbr` -- [Abbreviations][]
* `attr_list` -- [Attribute Lists][]
* `def_list` -- [Definition Lists][]
* `fenced_code` -- [Fenced Code Blocks][]
* `footnotes` -- [Footnotes][]
* `tables` -- [Tables][]
* `smart_strong` -- [Smart Strong][]

[Abbreviations]: http://pythonhosted.org/Markdown/extensions/abbreviations.html
[Attribute Lists]: http://pythonhosted.org/Markdown/extensions/attr_list.html
[Definition Lists]: http://pythonhosted.org/Markdown/extensions/definition_lists.html
[Fenced Code Blocks]: http://pythonhosted.org/Markdown/extensions/fenced_code_blocks.html
[Footnotes]: http://pythonhosted.org/Markdown/extensions/footnotes.html
[Tables]: http://pythonhosted.org/Markdown/extensions/tables.html
[Smart Strong]: http://pythonhosted.org/Markdown/extensions/smart_strong.html


You can enable them all at once using the `extra` keyword.

    extensions: [ 'extra' ]

If you want all the extras plus the `toc` extension,
your settings would look like this:

    {
        ...
        parser: 'markdown',
        extensions: ['extra', 'toc'],
        ...
    }


#### Other Extensions

There are also some extensions that are not included in Markdown Extra
but come in the standard Python-Markdown library.

* `code-hilite` -- [CodeHilite][]
* `html-tidy` -- [HTML Tidy][]
* `header-id` -- [HeaderId][]
* `meta_data` -- [Meta-Data][]
* `nl2br` -- [New Line to Break][]
* `rss` -- [RSS][]
* `sane_lists` -- [Sane Lists][]
* `smarty` -- [Smarty][]
* `toc` -- [Table of Contents][]
* `wikilinks` -- [WikiLinks][]

[CodeHilite]:  http://pythonhosted.org/Markdown/extensions/code_hilite.html
[HTML Tidy]:  http://pythonhosted.org/Markdown/extensions/html_tidy.html
[HeaderId]:  http://pythonhosted.org/Markdown/extensions/header_id.html
[Meta-Data]:  http://pythonhosted.org/Markdown/extensions/meta_data.html
[New Line to Break]:  http://pythonhosted.org/Markdown/extensions/nl2br.html
[RSS]:  http://pythonhosted.org/Markdown/extensions/rss.html
[Sane Lists]:  http://pythonhosted.org/Markdown/extensions/sane_lists.html
[Table of Contents]:  http://pythonhosted.org/Markdown/extensions/toc.html
[WikiLinks]:  http://pythonhosted.org/Markdown/extensions/wikilinks.html
[Smarty]: https://pythonhosted.org/Markdown/extensions/smarty.html

#### 3rd Party Extensions

*Python-Markdown* is designed to be extended.

Some included ones are:

* `delete` -- github style delte support via `~~word~~`
* `githubemoji` --  github emoji support
* `tasklist` -- github style tasklists
* `magiclink` -- github style auto link conversion of http|ftp links
* `headeranchor` -- github style header anchor links
* `github` -- Adds the above extensions in one shot
* `b64` -- convert and embed local images to base64.  Setup by adding this `b64(base_path=${BASE_PATH})`

There are also a number of others available:

Just fork this repo and add your extensions inside the `.../Packages/Markdown Preview/markdown/extensions/` folder.

Check out the list of [3rd Party extensions](
https://github.com/waylan/Python-Markdown/wiki/Third-Party-Extensions).


#### Default Extensions

The default extensions are:

* `footnotes` -- [Footnotes]
* `toc` -- [Table of Contents]
* `fenced_code` -- [Fenced Code Blocks] 
* `tables` -- [Tables]

Use the `default` keyword, to select them all.
If you want all the defaults plus the `definition_lists` extension,
your settings would look like this:

    {
        ...
        parser: 'markdown',
        extensions: ['default', 'definition_lists'],
        ...
    }

## Examples

### Tables

The `tables` extension of the *Python-Markdown* parser is activated by default,
but is currently **not** available in *Markdown2*.

The syntax was adopted from the [php markdown project](http://michelf.ca/projects/php-markdown/extra/#table),
and is also used in github flavoured markdown.

| Year | Temperature (low) | Temperature (high) |  
| ---- | ----------------- | -------------------|  
| 1900 |               -10 |                 25 |  
| 1910 |               -15 |                 30 |  
| 1920 |               -10 |                 32 |  


### Wiki Tables

If you are using *Markdown2* with the `wiki-tables` extra activated you should see a table below:

|| *Year* || *Temperature (low)* || *Temperature (high)* ||  
||   1900 ||                 -10 ||                   25 ||  
||   1910 ||                 -15 ||                   30 ||  
||   1920 ||                 -10 ||                   32 ||  


### Definition Lists

This example requires *Python Markdown*'s `def_list` extension.

Apple
:   Pomaceous fruit of plants of the genus Malus in 
    the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.


## About

This plugin and this sample file is proudly brought to you by the [revolunet team][revolunet]

 [ref1]: http://revolunet.com
 [ref2]: http://revolunet.com "rich web apps"
 [MarkdownREF]: http://daringfireball.net/projects/markdown/basics
 [MarkdownPreview]: https://github.com/revolunet/sublimetext-markdown-preview
 [ST]: http://sublimetext.com
 [revolunet]: http://revolunet.com
 [revolunet-logo]: http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo"
 [gfm]: https://help.github.com/articles/github-flavored-markdown/
 [emoji]: http://www.emoji-cheat-sheet.com/
