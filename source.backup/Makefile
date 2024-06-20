all: jing html pdf

jing: *.ptx
	java -classpath jing-trang/build -Dorg.apache.xerces.xni.parser.XMLParserConfiguration=org.apache.xerces.parsers.XIncludeParserConfiguration -jar ~/jing-trang/build/jing.jar /home/ecb5/PreText/mathbook/schema/pretext.rng ASORA.ptx


tex: *.ptx Makefile
	/home/ecb5/.local/bin/pretext build latex

pdf: *.ptx Makefile
	/home/ecb5/.local/bin/pretext build pdf

html: *.ptx Makefile
	/home/ecb5/.local/bin/pretext build html

webview: 
	/home/ecb5/.local/bin/pretext view html

pdfview:
	/home/ecb5/.local/bin/pretext view pdf

deploy:
	/home/ecb5/.local/bin/pretext deploy -u

