(TeX-add-style-hook "Problems-tmp"
 (lambda ()
    (LaTeX-add-index-entries
     "Theorems!Theorem~\\ref{#1}"
     "Definitions!Definition~\\ref{#1}"
     "Corollaries!Corollary~\\ref{#1}"
     "Lemmas!Lemma~\\ref{#1}")
    (LaTeX-add-environments
     '("solution" 1)
     "ProofOutline"
     "hint"
     "scrapwork"
     "problem"
     "definition"
     "theorem"
     "example"
     "corollary"
     "lemma")
    (LaTeX-add-labels
     "#1")
    (TeX-add-symbols
     '("xqed" 1)
     '("xqedhere" 2)
     "eps"
     "unif"
     "ptwise"
     "CC"
     "DD"
     "RR"
     "QQ"
     "NN"
     "ZZ"
     "halmos"
     "IndexTheorem"
     "IndexDefinition"
     "IndexCorollary"
     "IndexLemma"
     "divides"
     "notdivide"
     "oldmarginpar"
     "imp"
     "d"
     "dfdx"
     "abs"
     "limit"
     "LabelProblem")
    (TeX-run-style-hooks
     "makeidx"
     "color"
     "graphicx"
     "amsthm"
     "amssymb"
     "amsmath"
     "hyperref"
     "ifpdf"
     "wrapfig"
     ""
     "latex2e"
     "bk10"
     "book"
     "oneside")))

