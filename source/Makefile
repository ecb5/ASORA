all: jing html pdf

jing: *.ptx
	java -classpath jing-trang/build -Dorg.apache.xerces.xni.parser.XMLParserConfiguration=org.apache.xerces.parsers.XIncludeParserConfiguration -jar ~/jing-trang/build/jing.jar /home/ecb5/PreText/mathbook/schema/pretext.rng ASORA.ptx


tex: *.ptx Makefile
	pretext build latex

pdf: *.ptx Makefile
	pretext build pdf

html: *.ptx Makefile
	pretext build html

webview: 
	pretext view html

pdfview:
	pretext view pdf
