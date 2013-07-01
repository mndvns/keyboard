
build: components index.js stylus template.js
	@component build --dev

template.js: template.html
	@component convert $<

components: component.json
	@component install --dev

stylus:
	@./node_modules/.bin/stylus \
		-c . --use nib

clean:
	rm -fr build components template.js

mocha:
	@mocha -r should -R spec --watch --growl


.PHONY: clean
