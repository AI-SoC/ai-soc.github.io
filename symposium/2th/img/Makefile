
help:
	@echo "make fig"


all: fig 

fig: cover.pdf 

cover.pdf: cover.pptx
	..\..\tools\ppt2pdf ./cover.pptx ./cover.pdf 
	..\..\tools\pdf2svg\pdf2svg cover.pdf cover.svg


