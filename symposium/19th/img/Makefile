
help:
	@echo "make fig"


all: fig 

fig: cover.pdf cover.svg

cover.pdf: cover.pptx
	ppt2pdf ./cover.pptx ./cover.pdf 

cover.svg: cover.pptx
	..\..\..\..\..\01_tool\pdf2svg\pdf2svg cover.pdf cover.svg
