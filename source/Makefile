all: jing html pdf

jing: *.ptx 
	jing /home/ecb5/.ptx/schema/pretext.rng main.ptx

tex: *.ptx Makefile
	/home/ecb5/.local/bin/pretext build latex

pdf: *.ptx Makefile
	/home/ecb5/.local/bin/pretext build print

web: *.ptx Makefile
	/home/ecb5/.local/bin/pretext build web

view: 
	/home/ecb5/.local/bin/pretext view web

pdfview:
	/usr/bin/evince /home/ecb5/Dropbox/Books/ASORA/output/pdf/main.pdf

deploy:
	/home/ecb5/.local/bin/pretext deploy -u

