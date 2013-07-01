
SRC = $(wildcard lib/*.js)

build: components stylus template.js $(SRC)
	@component build --dev

template.js: template.html
	@component convert $<

components: component.json
	@component install --dev

stylus:
	@./node_modules/.bin/stylus \
		-c . --use nib

# jade:
# 	@jade ./template.jade

clean:
	rm -fr build components template.js

test: build
	nautilus test/index.html


.PHONY: clean
