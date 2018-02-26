# Deakin SEC Website
Repository containing the code for the Deakin Software Engineering Club (DSEC) public website

To see the site live, visit https://philipcastiglione.github.io/deakin-sec-website

## Documentation

- [Planning Document](https://docs.google.com/document/d/1y_2onuSHMA2cOb1OHVBb2HoMx5T1LK19wur8mgKdtFo/edit?usp=sharing)
- [Technology Choice Document](https://docs.google.com/document/d/1mhElwfZDG7kUfJWsp8aTqIe7F2KO7B3mys9CxFkBi94/edit?usp=sharing)

Join the slack channel #sec-website in DSEC slack for more.

## Installing development requirements

Ensure the have a recent version of [Node.js](https://nodejs.org) and `npm`.

Open a terminal, and follow the instructions below.

```bash
cd /path/to/code
git clone https://github.com/deakinsec/deakin-sec-website.git
cd deakin-sec-website
npm install
```

If all went well, you'll see no errors.

## Running the development environment

In your first terminal window, run `gulp` to begin watching for changes.

In a second terminal window, run

```bash
node ./node_modules/http-server/bin/http-server -p 8080
```

Open up your browser and go to http://localhost:8080/. You should be able to see the
website!

## Editing HTML

Do not edit the HTML files in the root directory. Instead, edit the ones inside
the `src/` directory. The root directory files will be compiled over.

## TODO

admin:

1. transfer repository ownership to club (organisation) GitHub account

major tasks:

1. finish content
1. make responsive (mobile, tablet, laptop, desktop/large screen)
1. animations/interactivity/effects etc

design:

1. polish and increase consistency (colour, styles)
