## USAGE

#### Install dependencies and bootstrap packages' dependencies

```bash
# installs root dependencies and bootstraps packages
npm i
```

#### Global commands

```bash
# get a list of all lerna commands
npx lerna --help

# Setup a new packacge managed by Lerna
# NOTE: Don't forget to check that the folder was added to ./lerna.json
npx lerna create <pkg> --private --yes ./<pkg>

# install a dependency to a specific package
npx lerna add eslint --dev --scope=backoffice

# remove a dependency from a specific package
npx lerna exec 'npm r -D eslint' --scope=backoffice

# Run a script on an specific package
npx lerna run <script> --scope <pkg>
```

#### Starting up

```bash
# runs npm the start script on every package.
npm start
```

## CHANGELOG

### Setting the tools of the trade

[**`v0.0.1`**](/../../milestone/1) `Sat, June 27th 2020`

The general idea in this version is to determine the base technology to use on the project. Said technology won't change for at least a year. At the beginning I thougt I was going to use premade tools like a headless CMS, but I decided against it, this is my product, and I must use **tools** to build it, not kits. That means no frameworks, no shortcuts.

The general idea that I have in mind is to build a piece of software that allows me to build other pieces of software, remember that I talked about a headless CMS? yeah that's the first goal. A super simple one, nothing fancy (remember the rules).

* [x] [`#5`](/../../issues/5) Handle modules and their dependencies in a single place.
* [x] [`#6`](/../../issues/6) Tooling for best practices in code writing.
* [x] [`#7`](/../../issues/7) Create a skelleton App for the backoffice.
* [ ] [`#8`](/../../issues/8) Create a skelleton Project for the database server.
* [ ] [`#9`](/../../issues/9) Make first connection between Backoffice App and Database Provider.

### Manifesto

[**`v0.0.0`**](/../../milestones) `Sat, June 27th 2020`

This is it, this is the last personal project that I create before my 40s.

I've been 39yo for 4 days now, the clock is ticking, I'm turning 40 in 361 days and I haven't found the discipline in all these years to build a complete piece of software to manage my life; the goal is to have one before the 40th arrives, thing is that historically, I lack focus when doing this kind of personal projects, I've joked several times to my friends that I'm only a good product developer when it comes to build for someone else, but not this time, I owe this to myself, I've been wanting this for so long but I've been less and lees inclined to do so because of the turns that my life had been taking, my SO inspired me to get back on track, follow my dreams and try this one more time, this time must be different though, I've learned about my vices, I know where my weak points are and this time I'm ready. These are the rules that I will follow in order to keep myself from repeating mistakes from the past and that hopefully enable me to give myself the greatest 40th birthday present: A finished product.

The rules are:

1. KISS, don't reinvent the wheel.
2. Learn, innovate experimentate, don't feel bad if it takes a while.
3. Be practical, small goals, it's all about MVPs.
4. Stick with your choices, yeah, you're gonna fuck up, something new is going to come up, find ways to innovate without killing you previous efforts.
5. When in doubt, think about this project as you do with your dotfiles, those get the work done, they're not always pretty but THEY DO THE JOB.
6. Document your mindset so your future self knows what was going through your head, help yourself follow the rules.
>
Be excelent with yourself, for yourself.
