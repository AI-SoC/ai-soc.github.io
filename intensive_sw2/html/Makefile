
.SUFFIXES:.pptx.pdf
PPTX_FILE=$(wildcard slide/[^~]*.pptx)
PDF_FILE=${PPTX_FILE:.pptx=.pdf}

help:
	@echo "make all"
	@echo "make slide"


all: slide

slide: ${PDF_FILE}

slide/%.pdf: slide/%.pptx
	ppt2pdf $< $@

