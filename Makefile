NAME = "APP"

${NAME}: run

run:
	npm start

install:
	npm install

build:
	npm run build

git:
	git add .
	git status
	git commit -m "commit"
	git push -u origin HEAD