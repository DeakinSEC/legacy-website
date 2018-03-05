# Deakin SEC Website
Repository containing the code for the Deakin Software Engineering Club (DSEC) public website

To see the site live, visit https://deakinsec.github.io/deakin-sec-website

## Documentation

- [Planning Document](https://docs.google.com/document/d/1y_2onuSHMA2cOb1OHVBb2HoMx5T1LK19wur8mgKdtFo/edit?usp=sharing)
- [Technology Choice Document](https://docs.google.com/document/d/1mhElwfZDG7kUfJWsp8aTqIe7F2KO7B3mys9CxFkBi94/edit?usp=sharing)

Join the slack channel #sec-website in DSEC slack for more.

## Deployment

The `master` branch is continuously deployed
[here](https://deakinsec.github.io/deakin-sec-website)
via [GitHub pages](https://pages.github.com/).

The `develop` branch contains additional features or work in progress that is
not yet ready for live publication. To deploy live, changes will be merged into
`master` via PR.

Long term feature development takes place in feature branches (eg.
`feature/port-to-elm`). These branches will have `develop` regularly merged in
to maintain currency. When the feature is complete it will be merged into
`develop` via PR.

## Contributing

### Git, GitHub workflow

We are using a standard fork/PR type workflow to ensure that contributions:

- can be reviewed before entering the codebase
- are recognised and recorded on GitHub as OSS contributions

Refer to [this Wiki page](https://github.com/deakinsec/deakin-sec-website/wiki/GitHub-Contribution-Workflow) for instructions.

Once you are comfortable with the workflow, you can start contributing.

For a new feature or change, decide whether the feature is significant enough
to warrant a new feature branch (most won't be). This will be something you want
to discuss in the #sec-website channel on DSEC slack.

If the new feature is very large, you (or a contributor with access) will need to
create the new feature branch with an appropriate name in the
deakinsec/deakin-sec-website repo.

Otherwise, you will be making your new changes in the develop branch.

For contributions to an existing work in progress feature, you can use the
existing branch.

When you know where (in which branch) your changes will need to be made, fork
this repo (or fetch and pull to bring your local up to date if you've done this
before). Then, switch to the relevant branch locally. Make your changes to your
local branch, commit and push them up to your origin.

When you are ready, submit a PR from your origin branch (develop or the feature
branch) to the matching upstream branch in the original deakin-sec repo.

Git (and GitHub) are pretty confusing and unintuitive until you get used to them
so make sure to read through the wiki and linked guides. If you get stuck, jump
onto slack and you will find help.

### Installing development requirements

Ensure the have a recent version of [Node.js](https://nodejs.org) and `npm`.

Open a terminal, and follow the instructions below.

```bash
cd /path/to/code
git clone https://github.com/deakinsec/deakin-sec-website.git
cd deakin-sec-website
```

If you already have [gulpjs](https://gulpjs.com) installed, you can skip this next step.

```bash
npm install gulp-cli -g
npm install gulp -D
```

You can then finalise the build installation process.

```bash
npm install
```

If all went well, you'll see no errors.

### Running the development environment

In your first terminal window, run `gulp` to begin watching for changes.

In a second terminal window, run

```bash
node ./node_modules/http-server/bin/http-server -p 8080
```

Open up your browser and go to http://localhost:8080/. You should be able to see the
website!

### Editing HTML

Do not edit the HTML files in the root directory. Instead, edit the ones inside
the `src/` directory. The root directory files will be compiled over.

## TODO

major tasks:

1. finish content
1. animations/interactivity/effects etc

design:

1. polish and increase consistency (colour, styles)
