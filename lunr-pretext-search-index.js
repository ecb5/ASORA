var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "FrontColophon",
  "level": "1",
  "url": "FrontColophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " 2.0  copyright  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": "    Mactutor  While we have tried to tell the story of the development of Real Analysis as completely as possible, our overriding goal was always to teach mathematics, not history. Thus we have necessarily left the history incomplete.  The interested student can fill in the gaps we have left by making use of the extensive resources that can be found at the MacTutor history of mathematics repository.  All of the portraits of mathematicians used in this text have been taken from MacTutor.  MacTutor was created, and is maintained by Professor Edmund Robertson (Emeritus), and Professor John O'Connor (Emeritus), both of the University of St. Andrews in Scotland.    Desmos  The interactive figures in Chapter were created using the Desmos online calculator .                                 "
},
{
  "id": "Instructor",
  "level": "1",
  "url": "Instructor.html",
  "type": "Chapter",
  "number": "1",
  "title": "To the Instructor",
  "body": " To the Instructor  The irony of this section is that it exists to tell you that this book was not written for you; it was written for your students. After all, we don't need to teach you about Real Analysis. You already understand the subject. The purpose of this text is to help your students make sense of the formal definitions, theorems, and proofs that they will encounter in your course. We do this by immersing the student in the story of how what is usually called Calculus evolved into modern Real Analysis. Our hope and intention is that this will help the student to appreciate why their intuitive understanding of topics encountered in calculus needs to be replaced by the formalism of Real Analysis.  The traditional approach to this topic (what we might call the logical story of Real Analysis), starts with a rigorous development of the real number system and uses this to provide rigorous definitions of limits, continuity, derivatives and integrals, and convergence of series; typically in that order. This is a perfectly legitimate story of Real Analysis and, logically, it makes the most sense. Indeed, this is a view of the subject that every mathematician-in-training should eventually attain. However, it is our contention that your students will appreciate the subject more, and hopefully retain it better, if they see how the subject developed from the intuitive notions of Leibniz, Newton and others in the seventeenth and eighteenth centuries to the more modern approach developed in the nineteenth and twentieth centuries. After all, they are coming at it from a viewpoint very similar to that of the mathematicians of the seventeenth and eighteenth centuries. Our goal is to bring them into the nineteenth and early twentieth centuries, mathematically speaking.  We hasten to add that this is not a history of analysis book. It is an introductory textbook on Real Analysis which uses the historical context of the subject to frame the concepts and to show why mathematicians felt the need to develop rigorous, non-intuitive definitions to replace their intuitive notions.  You will notice that most of the problems are embedded in the chapters, rather than lumped together at the end of each chapter. This is done to provide a context for the problems which, for the most part, are presented on an as-needed basis.  Thus the proofs of nearly all of the theorems appear as problems in the text. Of course, it would be very unfair to ask most students at this level to prove, say, the Bolzano-Weierstrass Theorem without some sort of guidance. So in each case we provide an outline of the proof and the subsequent problem will be to use the outline to develop a formal proof. Proof outlines will become less detailed as the students progress. We have found that this approach helps students develop their proof writing skills.  We state in the text, and we encourage you to emphasize to your students, that often they will use the results of problems as tools in subsequent problems. Trained mathematicians do this naturally, but it is our experience that this is still somewhat foreign to students who are used to simply getting the problem done and forgetting about it.   The problems range from the fairly straightforward to the more challenging. Some of them require the use of a computer algebra system (for example, to plot partial sums of a power series). These tend to occur earlier in the book where we encourage the students to use technology to explore the wonders of series. A number of these problems can be done on a sufficiently advanced graphing calculator or even on Wolfram Alpha, so you should assure your students that they do not need to be super programmers to do this. Of course, this is up to you.  A testing strategy we have used successfully is to assign more time consuming problems as collected homework and to assign other problems as possible test questions. Students could then be given some subset of these (verbatim) as an in-class test. Not only does this make test creation more straightforward, but it allows the opportunity to ask questions that could not reasonably be asked otherwise in a timed setting. Our experience is that this does not make the tests too easy, and there are worse things than having students study by working together on possible test questions beforehand. If you are shocked by the idea of giving students all of the possible test questions ahead of time, think of how much (re)learning you did studying the list of possible questions you knew would be asked on a qualifying exam.  In the end, use this book as you see fit. We believe your students will find it readable, as it is intended to be, and we are confident that it will help them to make sense out of the rigorous, non-intuitive definitions and theorems of Real Analysis and help them to develop their proof-writing skills.  If you have suggestions for improvement, comments or criticisms of our text please contact us at the email addresses below. We appreciate any feedback you can give us on this.  Thank you.   "
},
{
  "id": "ThreeLessons-lesson-one",
  "level": "1",
  "url": "ThreeLessons-lesson-one.html",
  "type": "Section",
  "number": "2.1",
  "title": "Lesson One",
  "body": " Lesson One  Get a pad of paper and write down the answer to this question: What is . . . No, really. We're serious. Get a writing pad. We'll wait.  We really are serious about this. Get a pad of paper!   Got it? Good. Now write down your answer to this question: What is a number? Don't think about it. Don't analyze it. Don't consider it. Just write down the best answer you can without thinking. You are the only person who ever needs to see what you've written.  Done? Good.  Now consider this: All of the objects listed below are numbers in a sense we will not make explicit here. How many of them does your definition include?                             (this is called a quaternion)   (this is the differential you learned all about in calculus)   (yes, matrices can be considered numbers).    Surely you included . Almost surely you included . But what about  Does your definition include Do you consider a number? Leibniz Leibniz, Gottfried Wilhelm did. Any of the others? (And, yes, they really are all numbers. )  The lesson in this little demonstration is this: You don't really have a clear notion of what we mean when we use the word number. And this is fine. Not knowing is acceptable.   Sometimes it is even encouraged.   A principal goal of this course of study is to rectify this, at least a little bit. When the course is over you may or may not be able to give a better definition of the word number but you will have a deeper understanding of the real numbers at least. That is enough for now.  "
},
{
  "id": "ThreeLessons_lesson-two",
  "level": "1",
  "url": "ThreeLessons_lesson-two.html",
  "type": "Section",
  "number": "2.2",
  "title": "Lesson Two",
  "body": " Lesson Two  Read and understand the following development of the Quadratic Formula.  Suppose . If   Were you able to follow the argument? Probably the step from equation to equation presented no difficulties. But what about the next step? Do you see where equation came from? If so, good for you. Most students, in fact most mathematicians, cannot make that step in their heads. But are you sure? Is there, perhaps, some small detail you've overlooked?  Check to see.  That is, let in equation and see if you can get equation . Do it on that handy pad of paper we told you to get out earlier. Do it now. We'll wait.  If you still haven't gotten out a pad of paper, give up now. You're going to fail this course. Seriously. Do you think we would spend so much time on this, that we would repeat it so many times, if it weren't important. GET OUT A PAD OF PAPER NOW! Last chance. You've been warned.   Done? Good.  Perhaps you haven't been able to fill in the details on your own. That's ok. Many people can't. If not then get help: from a classmate, a friend, your instructor, whomever. Unfortunately most people won't get help in this situation. Instead they will perceive this as failure, hide it and berate themselves or the problem as stupid. In short they will let their personal insecurities and demons overwhelm them. Don't do this. Get help. You are neither dumb nor incapable. There are a thousand reasons that on any given day you might not be able to solve this problem. But don't let a bad day interfere with the education you are here for. Get someone to help you over this hump. Later you will be able to help your helper in the same way. Really.  At this point we assume that you've successfully negotiated the transition from equation to equation .  See? It really wasn't that bad after all. Just a lot of elementary algebra. Now that you've done it (or seen it done), it is easy to see that there really wasn't much there.  But this is the point! We left those computations out precisely because we knew that they were routine and that you could fill in the details. Moreover, filling in the details yourself gives you a little better insight into the computations. If we'd filled them in for you we would have robbed you of that insight. And we would have made this book longer than it needs to be. We don't want to do either of those things. If we fill in all of the details of every computation for you, you won't learn to have confidence in your ability to do them yourself. And this book will easily double in length.  So the lesson here is this: Keep that pad of paper handy whenever you are reading this (or any other) mathematics text. You will need it. Routine computations will often be skipped. But calling them routine and skipping them does not mean that they are unimportant. If they were truly unimportant we would leave them out entirely.  Moreover routine does not mean obvious. Every step we took in the development of the Quadratic Formula was routine. But even routine computations need to be understood and the best way to understand them is to do them. This is the way to learn mathematics; it is the only way that really works. Don't deprive yourself of your mathematics education by skipping the most important parts.   If you didn't fill in those details you're being stupid (or at least unduly stubborn). There is a good reason for putting these three lessons first. Stop wasting your time and intellect! Go do it now.   As you saw when you filled in the details of our development of the Quadratic Formula the substitution was crucial because it turned into where depends only on , , and . In the sixteenth century a similar technique was used by Ludovico Ferrari (1522-1565) to reduce the general cubic equation into the so-called depressed cubic  where , and depend only on , , , and .  The general depressed cubic had previously been solved by Tartaglia (the Stutterer, 1500-1557) so converting the general cubic into a depressed cubic provided a path for Ferrari to compute the Cubic Formula  like the Quadratic Formula but better.  It is not entirely clear why eliminating the quadratic term should be depressing, but there it is.    Tartaglia , The Stutterer    Ferrari also knew how to compute the general solution of the depressed quartic so when he and his teacher Girolomo Cardano (1501-1576) figured out how to depress a general quartic they had a complete solution of the general quartic as well.  Girolomo Cardano  Cardano, Girolomo   Alas, their methods broke down entirely when they tried to solve the general quintic equation. Unfortunately the rest of this story belongs in a course on Abstract Algebra, not Real Analysis. But the lesson in this story applies to all of mathematics: Every problem solved is a new theorem which then becomes a tool for later use. Depressing a cubic would have been utterly useless had not Tartaglia had a solution of the depressed cubic in hand. The technique they used, with slight modifications, then allowed for a solution of the general quartic as well.  Keep this in mind as you proceed through this course and your mathematical education. Every problem you solve is really a theorem, a potential tool that you can use later. We have chosen the problems in this text deliberately with this in mind. Don't just solve the problems and move on. Just because you have solved a problem does not mean you should stop thinking about it. Keep thinking about the problems you've solved. Internalize them. Make the ideas your own so that when you need them later you will have them at hand to use.    Quadratic Formula first proof      Find so that the substitution depresses equation , the general cubic equation. Then find and in terms of , , , and .    Find so that the substitution depresses the general quartic equation. Make sure you demonstrate how you obtained that value or why it works (if you guessed it).    Find so that the substitution depresses a polynomial of degree . Ditto on showing that this value works or showing how you obtained it.        Another Derivation of the Quadratic Formula    Quadratic Formula second proof Here is yet another way to solve a quadratic equation. Read the development below with pencil and paper handy. Confirm all of the computations that are not completely transparent to you. Then use your notes to present the solution with all steps filled in.   Be sure you are clear on the purpose of this problem before you begin. This is not about solving the Quadratic Equation. You already know how to do that. Our purpose here is to give you practice filling in the skipped details of mathematical exposition. We've chosen this particular problem because it should be a comfortable setting for you, but this particular solution is probably outside of your previous experience.   Suppose that and are solutions of . Without loss of generality suppose that . Suppose further that . Then .  Therefore .  Equations and can be solved simultaneously to yield .    "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "ThreeLessons_lesson-two.html#figure-1",
  "type": "Figure",
  "number": "2.2.0.1",
  "title": "",
  "body": " Tartaglia , The Stutterer   "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "ThreeLessons_lesson-two.html#figure-2",
  "type": "Figure",
  "number": "2.2.0.2",
  "title": "",
  "body": " Girolomo Cardano  Cardano, Girolomo   "
},
{
  "id": "problem-1",
  "level": "2",
  "url": "ThreeLessons_lesson-two.html#problem-1",
  "type": "Problem",
  "number": "2.2.0.3",
  "title": "",
  "body": "  Quadratic Formula first proof      Find so that the substitution depresses equation , the general cubic equation. Then find and in terms of , , , and .    Find so that the substitution depresses the general quartic equation. Make sure you demonstrate how you obtained that value or why it works (if you guessed it).    Find so that the substitution depresses a polynomial of degree . Ditto on showing that this value works or showing how you obtained it.      "
},
{
  "id": "problem-2",
  "level": "2",
  "url": "ThreeLessons_lesson-two.html#problem-2",
  "type": "Problem",
  "number": "2.2.0.4",
  "title": "Another Derivation of the Quadratic Formula.",
  "body": " Another Derivation of the Quadratic Formula    Quadratic Formula second proof Here is yet another way to solve a quadratic equation. Read the development below with pencil and paper handy. Confirm all of the computations that are not completely transparent to you. Then use your notes to present the solution with all steps filled in.   Be sure you are clear on the purpose of this problem before you begin. This is not about solving the Quadratic Equation. You already know how to do that. Our purpose here is to give you practice filling in the skipped details of mathematical exposition. We've chosen this particular problem because it should be a comfortable setting for you, but this particular solution is probably outside of your previous experience.   Suppose that and are solutions of . Without loss of generality suppose that . Suppose further that . Then .  Therefore .  Equations and can be solved simultaneously to yield .   "
},
{
  "id": "ThreeLessons_lesson-three",
  "level": "1",
  "url": "ThreeLessons_lesson-three.html",
  "type": "Section",
  "number": "2.3",
  "title": "Lesson Three",
  "body": " Lesson Three  In the hustle and bustle of a typical college semester, with a lot of demands on your time and very little time to think, it becomes very easy to see each problem you solve as a small, isolated victory and then move on to the next challenge. This is understandable. Each problem you solve is a small victory and you've every right to be proud of it. But it is not isolated and it is a mistake to think that it is.   George Polya    In his book How to Solve It the mathematician and teacher George Polya gave four steps for problem solving. The steps may be paraphrased as   Understand the problem.    Formulate a plan.    Execute the plan.    Reflect on what you've done.     This process is iterative. That is, once a plan is formulated and executed we often find that our plan was not up to the task. So we have to ask what went wrong, form a new plan and try again. This is the fourth step: Reflect on what you've done.  Almost everyone remembers this fourth step when their plan doesn't work. After all, you've got to try again so you have to ask what went wrong. But it is all too easy to neglect that crucial fourth step when the plan succeeds. In that case, flush with success we usually move on to the next problem and start over from scratch.  This is a mistake. Having solved a problem is no reason to stop thinking about it.  That fourth step is at least as important when we have succeeded as when we have failed. Each time you solve a problem stop and ask yourself a few questions:   Are there any easy consequences that follow from the result?    How does it fit into the broader scheme of other problems you have solved?    How might it be used in the future?     Also, notice the structure of the problem. Some assumptions had to be made. What were they? Were they all necessary? That is, did your solution use everything that was assumed? If not, you may have something considerably more general than it at first appears. What is that more general statement? Even if you used all of the assumptions, was that really necessary? Can you solve a similar problem with weaker assumptions?  Take a moment to pack all of these questions (and their answers) away in your mind so that when you see something similar in the future you will be reminded of it. Don't solve any problem and then forget it and move on. The nature of mathematics is cumulative. Remember, you are not here to accumulate grade points. You are here to learn and understand the concepts and methods of mathematics, to gain mathematical maturity. Part of that maturation process is the accumulation of a body of facts (theorems), and techniques that can be used to prove new theorems (solve new problems).  This text has been written with the maturation process in mind. You will frequently find that the problems you solve today can be used to good effect in the ones you attempt tomorrow, but only if you remember them. So take a moment after you've solved each problem to think about how it fits into the patterns you already know. This is important enough to bear repeating: A problem, once solved, becomes a tool for solving subsequent problems!   The purpose of the following sequence of problems is to help you become accustomed to this notion (if you aren't already). It is a progression of results about prime numbers. As you probably recall, a prime number is any integer greater than whose only factors are itself and . For example, , , , , are prime, while , , are not. A major result about prime numbers is the following:     The Fundamental Theorem of Arithmetic   Any integer greater than is either prime or it is a product of prime numbers. Furthermore, this prime decomposition is unique up to the order of the factors.    We will not prove this, but we will use it as a starting point to examine the following problems. As you do these problems, notice how subsequent problems make use of the previous results.  Notice that the notation simply means that the integer divides the integer with no remainder.  Fermat's Little Theorem, step 1    Fermat's Little Theorem problems leading to if a prime divides a product of two numbers then it divides one of the factors Let be a prime number and positive integers such that . Show that or .    If then we are done. If not then notice that is a prime factor of . What does the Fundamental Theorem of Arithmetic say about the prime factors of compared to the prime factors of and     Fermat's Little Theorem, step 2    Fermat's Little Theorem problems leading to if a prime divides an arbitrary product then it divides one of the factors Let be a prime number and let be positive integers such that . Show that for some .    Use induction on and the result of the previous problem.    Fermat's Little Theorem, step 3    Fermat's Little Theorem problems leading to if is prime then divides Let be a prime number and let be an integer with . Prove that , where is the binomial coefficient .    We know , so . How does the previous result apply?    We now have all the machinery in place to prove one of the really cool theorems from number theory.     Fermat's Little Theorem    Fermat's Little Theorem Let be any prime number. Then for all positive integers .    Fermat's Little Theorem    Fermat's Little Theorem Prove Fermat's Little Theorem.    Use induction on . To get from to , use the binomial theorem on .    Fermat's Little Theorem is the foundational basis for a number of results in number theory and encryption.  "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "ThreeLessons_lesson-three.html#figure-3",
  "type": "Figure",
  "number": "2.3.0.5",
  "title": "",
  "body": " George Polya   "
},
{
  "id": "thm_FTA",
  "level": "2",
  "url": "ThreeLessons_lesson-three.html#thm_FTA",
  "type": "Theorem",
  "number": "2.3.0.6",
  "title": "",
  "body": "   The Fundamental Theorem of Arithmetic   Any integer greater than is either prime or it is a product of prime numbers. Furthermore, this prime decomposition is unique up to the order of the factors.   "
},
{
  "id": "problem-3",
  "level": "2",
  "url": "ThreeLessons_lesson-three.html#problem-3",
  "type": "Problem",
  "number": "2.3.0.7",
  "title": "Fermat’s Little Theorem, step 1.",
  "body": "Fermat's Little Theorem, step 1    Fermat's Little Theorem problems leading to if a prime divides a product of two numbers then it divides one of the factors Let be a prime number and positive integers such that . Show that or .    If then we are done. If not then notice that is a prime factor of . What does the Fundamental Theorem of Arithmetic say about the prime factors of compared to the prime factors of and    "
},
{
  "id": "problem-4",
  "level": "2",
  "url": "ThreeLessons_lesson-three.html#problem-4",
  "type": "Problem",
  "number": "2.3.0.8",
  "title": "Fermat’s Little Theorem, step 2.",
  "body": "Fermat's Little Theorem, step 2    Fermat's Little Theorem problems leading to if a prime divides an arbitrary product then it divides one of the factors Let be a prime number and let be positive integers such that . Show that for some .    Use induction on and the result of the previous problem.   "
},
{
  "id": "problem-5",
  "level": "2",
  "url": "ThreeLessons_lesson-three.html#problem-5",
  "type": "Problem",
  "number": "2.3.0.9",
  "title": "Fermat’s Little Theorem, step 3.",
  "body": "Fermat's Little Theorem, step 3    Fermat's Little Theorem problems leading to if is prime then divides Let be a prime number and let be an integer with . Prove that , where is the binomial coefficient .    We know , so . How does the previous result apply?   "
},
{
  "id": "thm_FermatsLittleTheorem",
  "level": "2",
  "url": "ThreeLessons_lesson-three.html#thm_FermatsLittleTheorem",
  "type": "Theorem",
  "number": "2.3.0.10",
  "title": "",
  "body": "   Fermat's Little Theorem    Fermat's Little Theorem Let be any prime number. Then for all positive integers .   "
},
{
  "id": "problem-6",
  "level": "2",
  "url": "ThreeLessons_lesson-three.html#problem-6",
  "type": "Problem",
  "number": "2.3.0.11",
  "title": "Fermat’s Little Theorem.",
  "body": "Fermat's Little Theorem    Fermat's Little Theorem Prove Fermat's Little Theorem.    Use induction on . To get from to , use the binomial theorem on .   "
},
{
  "id": "NumbersRealRational-AddProbs",
  "level": "1",
  "url": "NumbersRealRational-AddProbs.html",
  "type": "Section",
  "number": "3.1",
  "title": "Additional Problems",
  "body": " Additional Problems      sums and products of rational and irrational numbers   Determine if each of the following is always rational or always irrational. Justify your answers.    The sum of two rational numbers.    The sum of two irrational numbers.    The sum of a rational and an irrational number.         creating irrationals from rationals  irrational numbers  is it possible to have two rational numbers, and , such that is irrational  Is it possible to have two rational numbers, and , such that is irrational? If so, display an example of such and . If not, prove that it is not possible.     creating rationals from irrationals  irrational numbers  is it possible to have two irrational numbers, and , such that is rational   Decide if it is possible to have two irrational numbers, and , such that is rational. Prove it in either case.    "
},
{
  "id": "problem-11",
  "level": "2",
  "url": "NumbersRealRational-AddProbs.html#problem-11",
  "type": "Problem",
  "number": "3.1.1",
  "title": "",
  "body": " sums and products of rational and irrational numbers   Determine if each of the following is always rational or always irrational. Justify your answers.    The sum of two rational numbers.    The sum of two irrational numbers.    The sum of a rational and an irrational number.   "
},
{
  "id": "problem-12",
  "level": "2",
  "url": "NumbersRealRational-AddProbs.html#problem-12",
  "type": "Problem",
  "number": "3.1.2",
  "title": "",
  "body": "   creating irrationals from rationals  irrational numbers  is it possible to have two rational numbers, and , such that is irrational  Is it possible to have two rational numbers, and , such that is irrational? If so, display an example of such and . If not, prove that it is not possible.   "
},
{
  "id": "problem-13",
  "level": "2",
  "url": "NumbersRealRational-AddProbs.html#problem-13",
  "type": "Problem",
  "number": "3.1.3",
  "title": "",
  "body": " creating rationals from irrationals  irrational numbers  is it possible to have two irrational numbers, and , such that is rational   Decide if it is possible to have two irrational numbers, and , such that is rational. Prove it in either case.   "
},
{
  "id": "CalcIn17th18thCentury-NewtLeibStart",
  "level": "1",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html",
  "type": "Section",
  "number": "4.1",
  "title": "Newton and Leibniz Get Started",
  "body": " Newton and Leibniz Get Started   Leibniz's Calculus Rules   Gottfried Wilhelm Leibniz  Leibniz, Gottfried Wilhelm portrait of    The rules for calculus were first laid out in Gottfried Wilhelm Leibniz's 1684 paper Leibniz, Gottfried Wilhelm first calculus publication  Nova methodus pro maximis et minimis, itemque tangentibus, quae nec fractas nec irrationales, quantitates moratur, et singulare pro illi calculi genus (A New Method for Maxima and Minima as Well as Tangents, Which is Impeded Neither by Fractional Nor by Irrational Quantities, and a Remarkable Type of Calculus for This). Leibniz started with subtraction. That is, if and are very close together then their difference, , is very small. He expanded this idea to say that if and are infinitely close together (but still distinct) then their difference, , is infinitesimally small (but not zero).    Calculus Differentialis   This translates, loosely, as the calculus of differences.   This idea is logically very suspect and Leibniz knew it. But he also knew that when he used his calculus differentialis he was getting correct answers to some very hard problems. So he persevered.  Leibniz called both and  differentials (Latin for difference) because he thought of them as, essentially, the same thing. Over time it has become customary to refer to the infinitesimal as a differential, reserving difference for the finite case, . This is why calculus is often called differential calculus.   In his paper Leibniz gave rules for dealing with these infinitely small differentials. Specifically, given a variable quantity , represented an infinitesimal change in . Differentials are related via the slope of the tangent line to a curve. That is, if , then and are related by .  Leibniz then divided by giving   The elegant and expressive notation Leibniz invented was so useful that it has been retained through the years despite some profound changes in the underlying concepts. For example, Leibniz and his contemporaries would have viewed the symbol as an actual quotient of infinitesimals, whereas today we define it via the limit concept first suggested by Newton. Newton, Isaac   As a result the rules governing these differentials are very modern in appearance: Leibniz, Gottfried Wilhelm differentiation rules  .  Leibniz states these rules without proof: . . . the demonstration of all this will be easy to one who is experienced in such matters . . .. As an example, mathematicians in Leibniz's day would be expected to understand intuitively that if is a constant, then . Likewise, is really an extension of .    Leibniz's Approach to the Product Rule   Leibniz, Gottfried Wilhelm The explanation of the product rule using differentials is a bit more involved, but Leibniz expected that mathematicans would be fluent enough to derive it. The product can be thought of as the area of the following rectangle         With this in mind, can be thought of as the change in area when is changed by and is changed by . This can be seen as the L shaped region in the following drawing.         By dividing the L shaped region into 3 rectangles we obtain .  Even though and are infinitely small, Leibniz reasoned that is even more infinitely small (quadratically infinitely small?) compared to and and can thus be ignored leaving .  You should feel some discomfort at the idea of simply tossing the product aside because it is comparatively small. This means you have been well trained, and have thoroughly internalized Newton's Newton, Isaac dictum : The smallest errors may not, in mathematical matters, be scorned. It is logically untenable to toss aside an expression just because it is small. Even less so should we be willing to ignore an expression on the grounds that it is infinitely smaller than another quantity which is itself infinitely small.   Newton and Leibniz both knew this as well as we do. But they also knew that their methods worked . They gave verifiably correct answers to problems which had, heretofore, been completely intractable. It is the mark of their genius that both men persevered in spite of the very evident difficulties their methods entailed.    Newton's Approach to the Product Rule  In the Principia, Newton proved the Product Rule as follows: Let and be flowing quantites and consider the rectangle, , whose sides are and . is also a flowing quantity and we wish to find its fluxion (derivative) at any time.  Newton's Method of Fluxions  Newton's approach to calculus his Method of Fluxions  depended fundamentally on motion. That is, he viewed his variables (fluents) as changing (flowing or fluxing) in time. The rate of change of a fluent he called a fluxion. As a foundation both Leibniz's and Newton's approaches have fallen out of favor, although both are still universally used as a conceptual approach, a way of thinking, about the ideas of calculus.   First increment and by and respectively. Then the corresponding increment of is .  Now decrement and by the same amounts: .  Subtracting the right side of equation from the right side of equation gives which is the total change of over the intervals and and also recognizably the Product Rule.     Isaac Newton  Newton, Isaac portrait of    This argument is no better than Leibniz's as it relies heavily on the number to make it work. If we take any other increments in and whose total lengths are and it will simply not work. Try it and see.  In Newton's defense, he wasn't really trying to justify his mathematical methods in the Principia. His attention there was on physics, not math, so he was really just trying to give a convincing demonstration of his methods. You may decide for yourself how convincing his demonstration is.   Lagrange, Joseph-Louis Notice that there is no mention of limits of difference quotients or derivatives. In fact, the term derivative was not coined until 1797, by Lagrange. In a sense, these topics were not necessary at the time, as Leibniz and Newton both assumed that the curves they dealt with had tangent lines and, in fact, Leibniz explicitly used the tangent line to relate two differential quantities. This was consistent with the thinking of the time and for the duration of this chapter we will also assume that all quantities are differentiable. As we will see later this assumption leads to difficulties.  Both Newton and Leibniz were satisfied that their calculus provided answers that agreed with what was known at the time. For example and  , results that were essentially derived by others in different ways.   Leibniz, Gottfried Wilhelm Leibniz's product rule  Leibniz's product rule   Use Leibniz's product rule to show that if is a positive integer then     Use Leibniz's product rule to derive the quotient rule .    Use the quotient rule to show that if is a positive integer, then        differentiation power rule with fractional exponents Let and be integers with . Show that     Leibniz also provided applications of his calculus to prove its worth. As an example he derived Snell's Law of Refraction from his calculus rules as follows.  Given that light travels through air at a speed of and travels through water at a speed of the problem is to find the fastest path from point to point .         According to Fermat's Principle of Least Time, this fastest path is the one that light will travel.  Using the fact that and the labeling in the picture below we can obtain a formula for the time it takes for light to travel from to .            Using the rules of Leibniz's calculus, we obtain .  Using the fact that at the minimum value for , , we have that the fastest path from to must satisfy . Inserting the following angles         we get that the path that light travels must satisfy which is Snell's Law.   Bernoulli, Johann   Brachistochrone problem, the To compare 18th century and modern techniques we will consider Johann Bernoulli's solution of the Brachistochrone problem. In 1696, Bernoulli posed, and solved, the Brachistochrone problem; that is, to find the shape of a frictionless wire joining points A and B so that the time it takes for a bead to slide down under the force of gravity is as small as possible.         Bernoulli posed this path of fastest descent problem to challenge the mathematicians of Europe and used his solution to demonstrate the power of Leibniz's calculus as well as his own ingenuity. Bernoulli, Johann Bernoulli's challenge    I, Johann Bernoulli, address the most brilliant mathematicians in the world. Nothing is more attractive to intelligent people than an honest, challenging problem, whose possible solution will bestow fame and remain as a lasting monument. Following the example set by Pascal, Fermat, etc., I hope to gain the gratitude of the whole scientific community by placing before the finest mathematicians of our time a problem which will test their methods and the strength of their intellect. If someone communicates to me the solution of the proposed problem, I shall publicly declare him worthy of praise.     Johann Bernoulli  Bernoulli, Johann portrait of    In addition to Johann's, solutions were obtained from Newton, Newton, Isaac Leibniz, Johann's brother Jacob Bernoulli, Bernoulli Jacob and the Marquis de l'Hopital . At the time there was an ongoing and very vitriolic controversy raging over whether Newton or Leibniz had been the first to invent calculus. An advocate of the methods of Leibniz, Bernoulli did not believe Newton would be able to solve the problem using his methods. Bernoulli attempted to embarrass Newton by sending him the problem. However Newton did solve it.  At this point in his life Newton had all but quit science and mathematics and was fully focused on his administrative duties as Master of the Mint. In part due to rampant counterfeiting, England's money had become severely devalued and the nation was on the verge of economic collapse. The solution was to recall all of the existing coins, melt them down, and strike new ones. As Master of the Mint this job fell to Newton . As you might imagine this was a rather Herculean task. Nevertheless, according to his niece:   When the problem in 1696 was sent by Bernoulli Sir I.N. was in the midst of the hurry of the great recoinage and did not come home till four from the Tower very much tired, but did not sleep till he had solved it, which was by four in the morning.   He is later reported to have complained, I do not love . . . to be . . . teezed by forreigners about Mathematical things  .   Bernoulli, Johann \"Tanquam ex ungue leonem\" Newton submitted his solution anonymously, presumably to avoid more controversy. Nevertheless the methods used were so distinctively Newton's that Bernoulli is said to have exclaimed Tanquam ex ungue leonem .     Tanquam ex ungue leonem    I know the lion by his claw.     Brachistochrone problem, the Bernoulli's solution Bernoulli's ingenious solution starts, interestingly enough, with Snell's Law of Refraction. He begins by considering the stratified medium in the following figure, where an object travels with velocities in the various layers.         By repeatedly applying Snell's Law he concluded that the fastest path must satisfy .  In other words, the ratio of the sine of the angle that the curve makes with the vertical and the speed remains constant along this fastest path.  If we think of a continuously changing medium as stratified into infinitesimal layers and extend Snell's law to an object whose speed is constantly changing,         then along the fastest path, the ratio of the sine of the angle that the curve's tangent makes with the vertical, , and the speed, , must remain constant. .  If we include axes and let denote the position of the bead at a particular time then we have the following picture.         In the above figure, denotes the length that the bead has traveled down to point (that is, the arc length of the curve from the origin to that point) and denotes the tangential component of the acceleration due to gravity . Since the bead travels only under the influence of gravity then .  To get a sense of how physical problems were approached using Leibniz's calculus we will use the above equation to show that .  By similar triangles we have . As a student of Leibniz, Bernoulli would have regarded as a fraction so or .  You are undoubtedly uncomfortable with the cavalier manipulation of infinitesimal quantities you've just witnessed, so we'll pause for a moment now to compare a modern development of equation to Bernoulli's. As before we begin with the equation: as before.  In effect, in the modern formulation we have traded the simplicity and elegance of differentials for a comparatively cumbersome repeated use of the Chain Rule. No doubt you noticed when taking Calculus that in the differential notation of Leibniz, Leibniz, Gottfried Wilhelm the Chain Rule looks like canceling an expression in the top and bottom of a fraction: . This is because for 18th century mathematicians, this is exactly what it was.  To put it another way, 18th century mathematicians wouldn't have recognized a need for what we call the Chain Rule because this operation was a triviality for them. Just reduce the fraction. This begs the question: Why did we abandon such a clear, simple interpretation of our symbols in favor of the, comparatively, more cumbersome modern interpretation? This is one of the questions we will try to answer in this course.  Returning to the Brachistochrone problem we observe that .  Bernoulli was then able to solve this differential equation.     Brachistochrone problem, the Show that the equations satisfy equation . Bernoulli recognized this solution to be an inverted cycloid, the curve traced by a fixed point on a circle as the circle rolls along a horizontal surface.    This illustrates the state of calculus in the late 1600's and early 1700's; the foundations of the subject were a bit shaky but there was no denying its power.   "
},
{
  "id": "figure-11",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#figure-11",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " Gottfried Wilhelm Leibniz  Leibniz, Gottfried Wilhelm portrait of   "
},
{
  "id": "fig1",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#fig1",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": "      "
},
{
  "id": "fig2",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#fig2",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": "      "
},
{
  "id": "Newton",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#Newton",
  "type": "Figure",
  "number": "4.1.4",
  "title": "",
  "body": "   Isaac Newton  Newton, Isaac portrait of   "
},
{
  "id": "problem-14",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#problem-14",
  "type": "Problem",
  "number": "4.1.5",
  "title": "",
  "body": " Leibniz, Gottfried Wilhelm Leibniz's product rule  Leibniz's product rule   Use Leibniz's product rule to show that if is a positive integer then     Use Leibniz's product rule to derive the quotient rule .    Use the quotient rule to show that if is a positive integer, then    "
},
{
  "id": "problem-15",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#problem-15",
  "type": "Problem",
  "number": "4.1.6",
  "title": "",
  "body": "   differentiation power rule with fractional exponents Let and be integers with . Show that    "
},
{
  "id": "snellfig",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#snellfig",
  "type": "Figure",
  "number": "4.1.7",
  "title": "",
  "body": "      "
},
{
  "id": "snellfig2",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#snellfig2",
  "type": "Figure",
  "number": "4.1.8",
  "title": "",
  "body": "      "
},
{
  "id": "snellfig3",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#snellfig3",
  "type": "Figure",
  "number": "4.1.9",
  "title": "",
  "body": "      "
},
{
  "id": "brachfig1",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#brachfig1",
  "type": "Figure",
  "number": "4.1.10",
  "title": "",
  "body": "      "
},
{
  "id": "figure-19",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#figure-19",
  "type": "Figure",
  "number": "4.1.11",
  "title": "",
  "body": " Johann Bernoulli  Bernoulli, Johann portrait of   "
},
{
  "id": "brachfig2",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#brachfig2",
  "type": "Figure",
  "number": "4.1.12",
  "title": "",
  "body": "      "
},
{
  "id": "snellfig4",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#snellfig4",
  "type": "Figure",
  "number": "4.1.13",
  "title": "",
  "body": "      "
},
{
  "id": "snellfig5",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#snellfig5",
  "type": "Figure",
  "number": "4.1.14",
  "title": "",
  "body": "      "
},
{
  "id": "problem-16",
  "level": "2",
  "url": "CalcIn17th18thCentury-NewtLeibStart.html#problem-16",
  "type": "Problem",
  "number": "4.1.15",
  "title": "",
  "body": "   Brachistochrone problem, the Show that the equations satisfy equation . Bernoulli recognized this solution to be an inverted cycloid, the curve traced by a fixed point on a circle as the circle rolls along a horizontal surface.   "
},
{
  "id": "ExponentAdditionProperty",
  "level": "1",
  "url": "ExponentAdditionProperty.html",
  "type": "Section",
  "number": "4.2",
  "title": "Power Series as Infinite Polynomials",
  "body": " Power Series as Infinite Polynomials   polynomials infinite Applied to polynomials, the rules of differential and integral calculus are straightforward. Indeed, differentiating and integrating polynomials represent some of the easiest tasks in a calculus course. For example, computing is relatively easy compared to computing . Unfortunately, not all functions can be expressed as a polynomial. For example, cannot be since a polynomial has only finitely many roots and the sine function has infinitely many roots, namely . A standard technique in the 18th century was to write such functions as an infinite polynomial, what we typically refer to as a power series. Unfortunately an infinite polynomial is a much more subtle object than a mere polynomial, which by definition is finite. For now we will not concern ourselves with these subtleties. We will follow the example of our forebears and manipulate all polynomial-like objects (finite or infinite) as if they are polynomials.     power series definition of A power series centered at is a series of the form .  Often we will focus on the behavior of power series , centered around , as the series centered around other values of are obtained by shifting a series centered at .    Before we continue, we will make the following notational comment. The most advantageous way to represent a series is using summation notation since there can be no doubt about the pattern to the terms. After all, this notation contains a formula for the general term. This being said, there are instances where writing this formula is not practical. In these cases, it is acceptable to write the sum by supplying the first few terms and using ellipses (the three dots). If this is done, then enough terms must be included to make the pattern clear to the reader.  Returning to our definition of a power series, consider, for example, the series Geometric series naive derivation geometric series . If we multiply this series by , we obtain .  This leads us to the power series representation .  If we substitute into the above, we obtain .  This agrees with the fact that , and so , and .  There are limitations to these formal manipulations however. Substituting or yields the questionable results .  We are missing something important here, though it may not be clear exactly what. A series representation of a function works sometimes, but there are some problems. For now, we will continue to follow the example of our 18th century predecessors and ignore them. That is, for the rest of this section we will focus on the formal manipulations to obtain and use power series representations of various functions. Keep in mind that this is all highly suspect until we can resolve problems like those just given.  Power series became an important tool in analysis in the 1700's. By representing various functions as power series they could be dealt with as if they were (infinite) polynomials. The following is an example.   as the solution of an Initial Value Problem   Solve the following Initial Value problem: Find given that .   A few seconds of thought should convince you that the solution of this problem is . We will ignore this for now in favor of emphasising the technique.   Assuming the solution can be expressed as a power series we have .  Differentiating gives us .  Since we see that .  This leads to the relationship .  Thus the series solution of the differential equation is .  Using the initial condition , we get . Thus the solution to the initial problem is . Let's call this function . Then by definition .    Let's examine some properties of this function. The first property is clear from the definition.   Property 1 .    Property 2 . .  To see this we multiply the two series together, so we have  .   Property 3 . If is a positive integer then . In particular, .    Prove Property 3.     Property 4 . .    Prove Property 4.     Property 5 . If is an integer with , then .    Prove Property 5.     Property 6 . If and are integers with , then .    Prove Property 6.       definition of Let be denoted by the number . Using the series , we can approximate to any degree of accuracy. In particular .    In light of Property 6, we see that for any rational number , . Not only does this give us the series representation for any rational number , but it gives us a way to define for irrational values of as well. That is, we can define for any real number .  As an illustration, we now have . The expression is meaningless if we try to interpret it as one irrational number raised to another. What does it mean to raise anything to the power? However the series does seem to have meaning and it can be used to extend the exponential function to irrational exponents. In fact, defining the exponential function via this series answers the question we raised in : What does mean?  It means .  This may seem to be the long way around just to define something as simple as exponentiation. But this is a fundamentally misguided attitude. Exponentiation only seems simple because we've always thought of it as repeated multiplication (in ) or root-taking (in ). When we expand the operation to the real numbers this simply can't be the way we interpret something like . How do you take the product of copies of The concept is meaningless. What we need is an interpretation of which is consistent with, say . This is exactly what the series representation of provides.  We also have a means of computing integrals as series. For example, the famous bell shaped curve given by the function is of vital importance in statistics and must be integrated to calculate probabilities. The power series we developed gives us a method of integrating this function. For example, we have .  This series can be used to approximate the integral to any degree of accuracy. The ability to provide such calculations made power series of paramount importance in the 1700's.   series solutions of   Show that if satisfies the differential equation , then and conclude that .    Since satisfies , we see that for some constants and . Show that in this case and and obtain .     derivative of series form  differentiation of as a series   Use the series to obtain the series .    Let and and use a computer algebra system to plot these for . Describe what is happening to the series as N becomes larger.     series Geometric series used to derive arctangent series  series   Use the geometric series, , to obtain a series for and use this to obtain the series .  Use the series above to obtain the series .    The series for arctangent was known by James Gregory (1638-1675) and it is sometimes referred to as Gregory's series. Leibniz Leibniz, Gottfried Wilhelm independently discovered by examining the area of a circle. Though it gives us a means for approximating to any desired accuracy, the series converges too slowly to be of any practical use. For example, if we compute the sum of the first terms we get which only approximates to two decimal places.  Newton Newton, Isaac knew of these results and the general scheme of using series to compute areas under curves. These results motivated Newton to provide a series approximation for as well, which, hopefully, would converge faster. We will use modern terminology to streamline Newton's ideas. First notice that as this integral gives the area of one quarter of the unit circle. The trick now is to find series that represents .  To this end we start with the binomial theorem , where .  Unfortunately, we now have a small problem with our notation which will be a source of confusion later if we don't fix it. So we will pause to address this matter. We will come back to the binomial expansion afterward.  This last expression is becoming awkward in much the same way that an expression like is awkward. Just as this sum is less cumbersome when written as the product  is less cumbersom when we write it as .  A capital pi ( ) is used to denote a product in the same way that a capital sigma ( ) is used to denote a sum. The most familiar example would be writing .  Just as it is convenient to define , we will find it convenient to define . Similarly, the fact that leads to the convention . Strange as this may look, it is convenient and is consistent with the convention .  Returning to the binomial expansion and recalling our convention , we can write, .  These two representations probably look the same at first. Take a moment and be sure you see where they differ.     There is an advantage to using this convention (especially when programing a product into a computer), but this is not a deep mathematical insight. It is just a notational convenience and we don't want you to fret over it, so we will use both formulations (at least initially).  Notice that we can extend the above definition of to values . In this case, will equal 0 as one of the factors in the product will be (the one where ). This gives us that when and so holds true for any nonnegative integer . Essentially Newton asked if it could be possible that the above equation could hold values of which are not nonnegative integers. For example, if the equation held true for , we would obtain or .  Notice that since is not an integer the series no longer terminates. Although Newton did not prove that this series was correct (nor did we), he tested it by multiplying the series by itself. When he saw that by squaring the series he started to obtain , he was convinced that the series was exactly equal to .     Binomial Series, the squaring the   Consider the series representation .  Multiply this series by itself and compute the coefficients for in the resulting series.       series graph the square root series Let .  Use a computer algebra system to plot for and compare these to the graph for . What seems to be happening? For what values of does the series appear to converge to     Convinced that he had the correct series, Newton used it to find a series representation of .     first series expansion Use the series to obtain the series .  Use a computer algebra system to sum the first 100 terms of this series and compare the answer to .    Again, Newton had a series which could be verified (somewhat) computationally. This convinced him even further that he had the correct series.     second series expansion    Show that and use this to show that .    We now have two series for calculating the one from part (a) and the one derived earlier, namely . We will explore which one converges to faster. With this in mind, define and . Use a computer algebra system to compute and for . Which one appears to converge to faster?       In general the series representation is called the binomial series (or Newton's binomial series). This series is correct when is a non-negative integer (after all, that is how we got the series). We can also see that it is correct when as we obtain which can be obtained from the geometric series .  In fact, the binomial series is the correct series representation for all values of the exponent (though we haven't proved this yet).   Binomial Series, the  Binomial Series, the as a power series centered at zero   Let be a positive integer. Find the power series, centered at zero, for by    Differentiating the series Geometric series differentiating geometric series times.    Applying the binomial series.    Compare these two results.     Leonhard Euler  Euler, Leonhard portrait of    Leonhard Euler was a master at exploiting power series. In 1735, the 28 year-old Euler won acclaim for what is now called the Basel problem: to find a closed form for . Other mathematicans knew that the series converged, but Euler was the first to find its exact value. The following problem essentially provides Euler's solution.  The Basel Problem  Euler, Leonhard Basel Problem, the   Show that the power series for is given by     Use (a) to infer that the roots of are given by     Suppose is a polynomial with roots . Show that if  , then all the roots are non-zero and .    Assuming that the result in part (c) holds for an infinite polynomial (power series), deduce that     Expand this product to deduce     Euler's Formula  Euler, Leonhard Euler's Formula   Use the power series expansion of , and to derive Euler's Formula :     Use Euler's formula to derive the Addition\/Subtraction formulas from Trigonometry:      Use Euler's formula to show that      Use Euler's formula to show that      Find a formula and for any positive integer .    "
},
{
  "id": "def_PowerSeries",
  "level": "2",
  "url": "ExponentAdditionProperty.html#def_PowerSeries",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "   power series definition of A power series centered at is a series of the form .  Often we will focus on the behavior of power series , centered around , as the series centered around other values of are obtained by shifting a series centered at .   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "ExponentAdditionProperty.html#example-1",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": " as the solution of an Initial Value Problem   Solve the following Initial Value problem: Find given that .   A few seconds of thought should convince you that the solution of this problem is . We will ignore this for now in favor of emphasising the technique.   Assuming the solution can be expressed as a power series we have .  Differentiating gives us .  Since we see that .  This leads to the relationship .  Thus the series solution of the differential equation is .  Using the initial condition , we get . Thus the solution to the initial problem is . Let's call this function . Then by definition .   "
},
{
  "id": "p-245",
  "level": "2",
  "url": "ExponentAdditionProperty.html#p-245",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Property 1 "
},
{
  "id": "p-246",
  "level": "2",
  "url": "ExponentAdditionProperty.html#p-246",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Property 2 "
},
{
  "id": "p-248",
  "level": "2",
  "url": "ExponentAdditionProperty.html#p-248",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Property 3 "
},
{
  "id": "problem-17",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-17",
  "type": "Problem",
  "number": "4.2.3",
  "title": "",
  "body": "  Prove Property 3.   "
},
{
  "id": "p-250",
  "level": "2",
  "url": "ExponentAdditionProperty.html#p-250",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Property 4 "
},
{
  "id": "problem-18",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-18",
  "type": "Problem",
  "number": "4.2.4",
  "title": "",
  "body": "  Prove Property 4.   "
},
{
  "id": "p-252",
  "level": "2",
  "url": "ExponentAdditionProperty.html#p-252",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Property 5 "
},
{
  "id": "problem-19",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-19",
  "type": "Problem",
  "number": "4.2.5",
  "title": "",
  "body": "  Prove Property 5.   "
},
{
  "id": "p-254",
  "level": "2",
  "url": "ExponentAdditionProperty.html#p-254",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Property 6 "
},
{
  "id": "problem-20",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-20",
  "type": "Problem",
  "number": "4.2.6",
  "title": "",
  "body": "  Prove Property 6.   "
},
{
  "id": "def_e",
  "level": "2",
  "url": "ExponentAdditionProperty.html#def_e",
  "type": "Definition",
  "number": "4.2.7",
  "title": "",
  "body": "   definition of Let be denoted by the number . Using the series , we can approximate to any degree of accuracy. In particular .   "
},
{
  "id": "problem-21",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-21",
  "type": "Problem",
  "number": "4.2.8",
  "title": "",
  "body": " series solutions of   Show that if satisfies the differential equation , then and conclude that .    Since satisfies , we see that for some constants and . Show that in this case and and obtain .   "
},
{
  "id": "problem-22",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-22",
  "type": "Problem",
  "number": "4.2.9",
  "title": "",
  "body": " derivative of series form  differentiation of as a series   Use the series to obtain the series .    Let and and use a computer algebra system to plot these for . Describe what is happening to the series as N becomes larger.   "
},
{
  "id": "prob_alternating_harmonic_series",
  "level": "2",
  "url": "ExponentAdditionProperty.html#prob_alternating_harmonic_series",
  "type": "Problem",
  "number": "4.2.10",
  "title": "",
  "body": " series Geometric series used to derive arctangent series  series   Use the geometric series, , to obtain a series for and use this to obtain the series .  Use the series above to obtain the series .   "
},
{
  "id": "problem-24",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-24",
  "type": "Problem",
  "number": "4.2.11",
  "title": "",
  "body": "   Binomial Series, the squaring the   Consider the series representation .  Multiply this series by itself and compute the coefficients for in the resulting series.   "
},
{
  "id": "prob_SqrtSeriesProb",
  "level": "2",
  "url": "ExponentAdditionProperty.html#prob_SqrtSeriesProb",
  "type": "Problem",
  "number": "4.2.12",
  "title": "",
  "body": "   series graph the square root series Let .  Use a computer algebra system to plot for and compare these to the graph for . What seems to be happening? For what values of does the series appear to converge to    "
},
{
  "id": "problem-26",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-26",
  "type": "Problem",
  "number": "4.2.13",
  "title": "",
  "body": "   first series expansion Use the series to obtain the series .  Use a computer algebra system to sum the first 100 terms of this series and compare the answer to .   "
},
{
  "id": "problem-27",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-27",
  "type": "Problem",
  "number": "4.2.14",
  "title": "",
  "body": "   second series expansion    Show that and use this to show that .    We now have two series for calculating the one from part (a) and the one derived earlier, namely . We will explore which one converges to faster. With this in mind, define and . Use a computer algebra system to compute and for . Which one appears to converge to faster?      "
},
{
  "id": "p-293",
  "level": "2",
  "url": "ExponentAdditionProperty.html#p-293",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial series "
},
{
  "id": "problem-28",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-28",
  "type": "Problem",
  "number": "4.2.15",
  "title": "",
  "body": " Binomial Series, the  Binomial Series, the as a power series centered at zero   Let be a positive integer. Find the power series, centered at zero, for by    Differentiating the series Geometric series differentiating geometric series times.    Applying the binomial series.    Compare these two results.   "
},
{
  "id": "figure-23",
  "level": "2",
  "url": "ExponentAdditionProperty.html#figure-23",
  "type": "Figure",
  "number": "4.2.16",
  "title": "",
  "body": " Leonhard Euler  Euler, Leonhard portrait of   "
},
{
  "id": "problem-29",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-29",
  "type": "Problem",
  "number": "4.2.17",
  "title": "The Basel Problem.",
  "body": "The Basel Problem  Euler, Leonhard Basel Problem, the   Show that the power series for is given by     Use (a) to infer that the roots of are given by     Suppose is a polynomial with roots . Show that if  , then all the roots are non-zero and .    Assuming that the result in part (c) holds for an infinite polynomial (power series), deduce that     Expand this product to deduce    "
},
{
  "id": "problem-30",
  "level": "2",
  "url": "ExponentAdditionProperty.html#problem-30",
  "type": "Problem",
  "number": "4.2.18",
  "title": "Euler’s Formula.",
  "body": "Euler's Formula  Euler, Leonhard Euler's Formula   Use the power series expansion of , and to derive Euler's Formula :     Use Euler's formula to derive the Addition\/Subtraction formulas from Trigonometry:      Use Euler's formula to show that      Use Euler's formula to show that      Find a formula and for any positive integer .   "
},
{
  "id": "CalcIn17th18thCentury-AddProb",
  "level": "1",
  "url": "CalcIn17th18thCentury-AddProb.html",
  "type": "Section",
  "number": "4.3",
  "title": "Additional Problems",
  "body": " Additional Problems     series Geometric series alternating  series Geometric series derivation of the series representation of from Use the geometric series to obtain the series        power series drills  Without using Taylor's Theorem, represent the following functions as power series expanded about 0 (i.e., in the form ).                               power series for expanded about 0 Let be a positive real number. Find a power series for expanded about 0.            power series of , expanded about  as a power series Represent the function sin as a power series expanded about (i.e., in the form ).     .       Maclaurin series drills  Without using Taylor's Theorem, represent the following functions as a power series expanded about for the given value of (i.e., in the form ).     ,      ,      ,      ,        series term by term integration of Evaluate the following integrals as series.                   "
},
{
  "id": "problem-31",
  "level": "2",
  "url": "CalcIn17th18thCentury-AddProb.html#problem-31",
  "type": "Problem",
  "number": "4.3.1",
  "title": "",
  "body": "   series Geometric series alternating  series Geometric series derivation of the series representation of from Use the geometric series to obtain the series    "
},
{
  "id": "problem-32",
  "level": "2",
  "url": "CalcIn17th18thCentury-AddProb.html#problem-32",
  "type": "Problem",
  "number": "4.3.2",
  "title": "",
  "body": "   power series drills  Without using Taylor's Theorem, represent the following functions as power series expanded about 0 (i.e., in the form ).                           "
},
{
  "id": "problem-33",
  "level": "2",
  "url": "CalcIn17th18thCentury-AddProb.html#problem-33",
  "type": "Problem",
  "number": "4.3.3",
  "title": "",
  "body": "   power series for expanded about 0 Let be a positive real number. Find a power series for expanded about 0.        "
},
{
  "id": "problem-34",
  "level": "2",
  "url": "CalcIn17th18thCentury-AddProb.html#problem-34",
  "type": "Problem",
  "number": "4.3.4",
  "title": "",
  "body": "   power series of , expanded about  as a power series Represent the function sin as a power series expanded about (i.e., in the form ).     .   "
},
{
  "id": "problem-35",
  "level": "2",
  "url": "CalcIn17th18thCentury-AddProb.html#problem-35",
  "type": "Problem",
  "number": "4.3.5",
  "title": "",
  "body": "   Maclaurin series drills  Without using Taylor's Theorem, represent the following functions as a power series expanded about for the given value of (i.e., in the form ).     ,      ,      ,      ,    "
},
{
  "id": "problem-36",
  "level": "2",
  "url": "CalcIn17th18thCentury-AddProb.html#problem-36",
  "type": "Problem",
  "number": "4.3.6",
  "title": "",
  "body": "   series term by term integration of Evaluate the following integrals as series.                  "
},
{
  "id": "PowerSeriesQuestions-TaylorsFormula",
  "level": "1",
  "url": "PowerSeriesQuestions-TaylorsFormula.html",
  "type": "Section",
  "number": "5.1",
  "title": "Taylor’s Formula",
  "body": " Taylor's Formula  As we saw in the previous chapter, representing functions as power series was a fruitful strategy for mathematicans in the eighteenth century (as it still is). Differentiating and integrating power series term by term was relatively easy, seemed to work, and led to many applications. Furthermore, power series representations for all of the elementary functions could be obtained if one was clever enough.  However, cleverness is an unreliable tool. Is there some systematic way to find a power series for a given function? To be sure, there were nagging questions: If we can find a power series, how do we know that the series we've created represents the function we started with? Even worse, is it possible for a function to have more than one power series representation centered at a given value This uniqueness issue is addressed by the following theorem.     Taylor's Formula If , then , where represents the derivative of evaluated at .    A few comments about Theorem are in order. Notice that we did not start with a function and derive its series representation. Instead we defined  to be the series we wrote down. This assumes that the expression actually has meaning (that it converges). At this point we have every reason to expect that it does, however expectation is not proof so we note that this is an assumption, not an established truth. Similarly, the idea that we can differentiate an infinite polynomial term-by-term as we would a finite polynomial is also assumed. As before, we follow in the footsteps of our 18th century forebears in making these assumptions. For now.     Taylor's Formula Prove Theorem .     . Differentiate to obtain the other terms.    From Theorem we see that if we do start with the function then no matter how we obtain its power series, the result will always be the same. The series    Brook Taylor  Taylor, Brook portrait of    is called the Taylor series for expanded about (centered at) . Although this systematic machine for obtaining power series for a function seems to have been known to a number of mathematicians in the early 1700's, Brook Taylor was the first to publish this result in his Methodus Incrementorum (1715). The special case when was included by Colin Maclaurin in his Treatise of Fluxions (1742). Thus when , the series is often called the Maclaurin Series for .  The prime notation for the derivative was not used by Taylor, Maclaurin or their contemporaries. It was introduced by Joseph Louis Lagrange in his 1779 work Théorie des Fonctions Analytiques . In that work, Lagrange sought to get rid of Leibniz's infinitesimals and base calculus on the power series idea. His idea was that by representing every function as a power series, calculus could be done algebraically by manipulating power series and examining various aspects of the series representation instead of appealing to the controversial notion of infinitesimals. He implicitly assumed that every continuous function could be replaced with its power series representation.  That is, he wanted to think of the Taylor series as a great big polynomial, because polynomials are easy to work with. It was a very simple, yet exceedingly clever and far-reaching idea. Since , for example, why not just define the exponential to be the series and work with the series. After all, the series is just a very long polynomial.  This idea did not come out of nowhere. Leonhard Euler had put exactly that idea to work to solve many problems throughout the 18th century. Some of his solutions are still quite breath-taking when you first see them .  Taking his cue from the Taylor series    Joseph-Louis Lagrange  Lagrange, Joseph-Louis portrait of    Lagrange observed that the coefficient of provides the derivative of at (divided by ). Modifying the formula above to suit his purpose, Lagrange supposed that every differentiable function could be represented as .  If we regard the parameter as a variable then is the derivative of , and generally .  Lagrange dubbed his function the fonction dérivée from which we get the modern name derivative.   All in all, this was a very clever and insightful idea whose only real flaw is that its fundamental assumption is not true. It turns out that not every differentiable function can be represented as a Taylor series. This was demonstrated very dramatically by Augustin Cauchy's famous counter-example .  This function is actually infinitely differentiable everywhere but its Maclaurin series (that is, a Taylor series with ) does not converge to because all of its derivatives at the origin are equal to zero: .  Computing these derivatives using the definition you learned in calculus is not conceptually difficult but the formulas involved do become complicated rather quickly. Some care must be taken to avoid error.  To begin with, let's compute a few derivatives when . .  As you can see the calculations are already getting a little complicated and we've only taken the second derivative. To streamline things a bit we take , and define so that .  Cauchy's Counterexample, Part 1  Cauchy, Augustin Cauchy's counterexample part 1   Adopting the notation and , find in terms of . [Note: Don't forget that you are differentiating with respect to , not .]    Use induction on to show that is a polynomial for all .    Unfortunately everything we've done so far only gives us the derivatives we need when is not zero, and we need the derivatives when  is zero. To find these we need to get back to very basic ideas.  Let's assume for the moment that we know that and recall that .  We can close the deal with the following problem.  Cauchy's Counterexample, Part 2  Cauchy, Augustin Cauchy's counterexample part 2   Let be a nonnegative integer. Show that .   Induction and a dash of L'Hôpital's rule should do the trick.    Prove that for any polynomial .    Let be as in equation and show that for every nonnegative integer , .    This example showed that while it was fruitful to exploit Taylor series representations of various functions, basing the foundations of calculus on power series was not a sound idea.  While Lagrange's approach wasn't totally successful, it was a major step away from infinitesimals and toward the modern approach. We still use aspects of it today. For instance we still use his prime notation ( ) to denote the derivative.  Turning Lagrange's idea on its head it is clear that if we know how to compute derivatives, we can use this machine to obtain a power series when we are not clever enough to obtain the series in other (typically shorter) ways. For example, consider Newton's binomial series when . Originally, we obtained this series by extending the binomial theorem to non-integer exponents. Taylor's formula provides a more systematic way to obtain this series: and in general since .  Using Taylor's formula we obtain the series which agrees with equation in the previous chapter.     Taylor's Formula use to obtain the general binomial series Use Taylor's formula to obtain the general binomial series        Taylor's series for  series Taylor's series expansion of , and  Taylor's series for  Taylor's series for Use Taylor's formula to obtain the Taylor series for the functions , sin , and cos expanded about .    As you can see, Taylor's machine will produce the power series for a function (if it has one), but is tedious to perform. We will find, generally, that this tediousness can be an obstacle to understanding. In many cases it will be better to be clever if we can. This is usually shorter. However, it is comforting to have Taylor's formula available as a last resort.  The existence of a Taylor series is addressed (to some degree) by the following.     Taylor's Theorem If are all continuous on an interval containing and , then .    Before we address the proof, notice that the -th degree polynomial resembles the Taylor series and, in fact, is called the  -th degree Taylor polynomial of about .  Theorem says that a function can be written as the sum of this polynomial and a specific integral which we will analyze in the next chapter. We will get the proof started and leave the formal induction proof as an exercise.  Notice that the case when is really a restatement of the Fundamental Theorem of Calculus. Specifically, the FTC says which we can rewrite as to provide the anchor step for our induction.  To derive the case where , we use integration by parts. If we let we obtain .     Taylor's Theorem Provide a formal induction proof for Theorem .    "
},
{
  "id": "TaylorSeriesThm",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#TaylorSeriesThm",
  "type": "Theorem",
  "number": "5.1.1",
  "title": "",
  "body": "   Taylor's Formula If , then , where represents the derivative of evaluated at .   "
},
{
  "id": "problem-37",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#problem-37",
  "type": "Problem",
  "number": "5.1.2",
  "title": "",
  "body": "   Taylor's Formula Prove Theorem .     . Differentiate to obtain the other terms.   "
},
{
  "id": "figure-24",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#figure-24",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": " Brook Taylor  Taylor, Brook portrait of   "
},
{
  "id": "figure-25",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#figure-25",
  "type": "Figure",
  "number": "5.1.4",
  "title": "",
  "body": " Joseph-Louis Lagrange  Lagrange, Joseph-Louis portrait of   "
},
{
  "id": "problem-38",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#problem-38",
  "type": "Problem",
  "number": "5.1.5",
  "title": "Cauchy’s Counterexample, Part 1.",
  "body": "Cauchy's Counterexample, Part 1  Cauchy, Augustin Cauchy's counterexample part 1   Adopting the notation and , find in terms of . [Note: Don't forget that you are differentiating with respect to , not .]    Use induction on to show that is a polynomial for all .   "
},
{
  "id": "problem-39",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#problem-39",
  "type": "Problem",
  "number": "5.1.6",
  "title": "Cauchy’s Counterexample, Part 2.",
  "body": "Cauchy's Counterexample, Part 2  Cauchy, Augustin Cauchy's counterexample part 2   Let be a nonnegative integer. Show that .   Induction and a dash of L'Hôpital's rule should do the trick.    Prove that for any polynomial .    Let be as in equation and show that for every nonnegative integer , .   "
},
{
  "id": "problem-40",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#problem-40",
  "type": "Problem",
  "number": "5.1.7",
  "title": "",
  "body": "   Taylor's Formula use to obtain the general binomial series Use Taylor's formula to obtain the general binomial series    "
},
{
  "id": "problem-41",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#problem-41",
  "type": "Problem",
  "number": "5.1.8",
  "title": "",
  "body": "   Taylor's series for  series Taylor's series expansion of , and  Taylor's series for  Taylor's series for Use Taylor's formula to obtain the Taylor series for the functions , sin , and cos expanded about .   "
},
{
  "id": "TaylorsTheorem",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#TaylorsTheorem",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "",
  "body": "   Taylor's Theorem If are all continuous on an interval containing and , then .   "
},
{
  "id": "problem-42",
  "level": "2",
  "url": "PowerSeriesQuestions-TaylorsFormula.html#problem-42",
  "type": "Problem",
  "number": "5.1.10",
  "title": "",
  "body": "   Taylor's Theorem Provide a formal induction proof for Theorem .   "
},
{
  "id": "PowerSeriesQuestions-SeriesAnomalies",
  "level": "1",
  "url": "PowerSeriesQuestions-SeriesAnomalies.html",
  "type": "Section",
  "number": "5.2",
  "title": "Series Anomalies",
  "body": " Series Anomalies  Up to this point, we have been somewhat frivolous in our approach to series. This approach mirrors eighteenth century mathematicians who ingeniously exploited calculus and series to provide mathematical and physical results which were virtually unobtainable before. Mathematicans were eager to push these techniques as far as they could to obtain their results and they often showed good intuition regarding what was mathematically acceptable and what was not. However, as the envelope was pushed, questions about the validity of the methods surfaced.  As an illustration consider the series expansion .  If we substitute into this equation, we obtain .  If we group the terms as follows , the series would equal . A regrouping of provides an answer of . This violation of the associative law of addition did not escape the mathematicians of the 1700's. In his 1760 paper On Divergent Series Euler said:   Notable enough, however are the controversies over the series , Leibniz, Gottfried Wilhelm whose sum was given by Leibniz as , although others disagree . . . Understanding of this question is to be sought in the word sum; this idea, if thus conceived - namely, the sum of a series is said to be that quantity to which it is brought closer as more terms of a series are taken - has relevance only for the convergent series, and we should in general give up this idea of sum for divergent series. On the other hand, as series in analysis arise from the expansion of fractions or irrational quantities or even of transcendentals, it will, in turn, be permissible in calculation to substitute in place of such series that quantity out of whose development it is produced.   Even with this formal approach to series, an interesting question arises. The series for the antiderivative of  does converge for while this one does not. Specifically, taking the antiderivative of the above series, we obtain .  If we substitute into this series, we obtain . It is not hard to see that such an alternating series converges. The following picture shows why. In this diagram, denotes the partial sum .   From the diagram we can see and . It seems that the sequence of partial sums will converge to whatever is in the middle. Our diagram indicates that it is ln in the middle but actually this is not obvious. Nonetheless it is interesting that one series converges for but the other does not.     series Taylor's series used to approximate Use the fact that to determine how many terms of the series should be added together to approximate to within without actually computing what is.    There is an even more perplexing situation brought about by these examples. An infinite sum such as appears to not satisfy the associative law for addition. While a convergent series such as does satisfy the associative law, it does not satisfy the commutative law. In fact, it does not satisfy it rather spectacularly.  A generalization of the following result was stated and proved by Bernhard Riemann Riemann, Bernhard in 1854.   series Alternating Harmonic Series rearrangements of   Let be any real number. There exists a rearrangement of the series which converges to .    This theorem shows that a series is most decidedly not a great big sum. It follows that a power series is not a great big polynomial.  To set the stage, consider the harmonic series  series Harmonic Series  .  Even though the individual terms in this series converge to , the series still diverges (to infinity) as evidenced by the inequality .  Armed with this fact, we can see why Theorem is true. First note that and .  This says that if we add enough terms of we can make such a sum as small as we wish and if we add enough terms of we can make such a sum as large as we wish. This provides us with the general outline of the proof. The trick is to add just enough positive terms until the sum is just greater than . Then we start to add on negative terms until the sum is just less than . Picking up where we left off with the positive terms, we add on just enough positive terms until we are just above again. We then add on negative terms until we are below . In essence, we are bouncing back and forth around . If we do this carefully, then we can get this rearrangement to converge to . The notation in the proof below gets a bit hairy, but keep this general idea in mind as you read through it.  Let be the first odd integer such that . Now choose to be the first even integer such that .  Thus .  Notice that we still have . With this in mind, choose to be the first odd integer with .  Thus we have .  Furthermore, since we have .  In a similar fashion choose to be the first even integer such that .  Since then .  Again choose to be the first odd integer such that and notice that .  Continue defining and in this fashion. Since , it is evident that the partial sums and must converge to . Furthermore, it is evident that every partial sum of the rearrangement is trapped between two such extreme partial sums. This forces the entire rearranged series to converge to .  The next two problems are similar to the above, but notationally are easier since we don't need to worry about converging to an actual number. We only need to make the rearrangement grow (or shrink in the case of problem ) without bound.   series Alternating Harmonic Series rearrangements of   Show that there is a rearrangement of which diverges to .     series Alternating Harmonic Series rearrangements of   Show that there is a rearrangement of which diverges to .    It is fun to know that we can rearrange some series to make them add up to anything you like but there is a more fundamental idea at play here. That the negative terms of the alternating Harmonic Series diverge to negative infinity and the positive terms diverge to positive infinity make the convergence of the alternating series very special.  Consider, first we add . This is one of the positive terms so our sum is starting to increase without bound. Next we add which is one of the negative terms so our sum has turned around and is now starting to decrease without bound. Then another positive term is added: increasing without bound. Then another negative term: decreasing. And so on. The convergence of the alternating Harmonic Series is the result of a delicate balance between a tendency to run off to positive infinity and back to negative infinity. When viewed in this light it is not really too surprising that rearranging the terms can destroy this delicate balance.  Naturally, the alternating Harmonic Series is not the only such series. Any such series is said to converge conditionally  the condition being the specific arrangement of the terms.  To stir the pot a bit more, some series do satisfy the commutative property. More specifically, one can show that any rearrangement of the series must converge to the same value as the original series (which happens to be ). Why does one series behave so nicely whereas the other does not?  Issues such as these and, more generally, the validity of using the infinitely small and infinitely large certainly existed in the 1700's, but they were overshadowed by the utility of the calculus. Indeed, foundational questions raised by the above examples, while certainly interesting and of importance, did not significantly deter the exploitation of calculus in studying physical phenomena. However, the envelope eventually was pushed to the point that not even the most practically oriented mathematician could avoid the foundational issues.  "
},
{
  "id": "problem-43",
  "level": "2",
  "url": "PowerSeriesQuestions-SeriesAnomalies.html#problem-43",
  "type": "Problem",
  "number": "5.2.1",
  "title": "",
  "body": "   series Taylor's series used to approximate Use the fact that to determine how many terms of the series should be added together to approximate to within without actually computing what is.   "
},
{
  "id": "thm_rearrangements",
  "level": "2",
  "url": "PowerSeriesQuestions-SeriesAnomalies.html#thm_rearrangements",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "",
  "body": " series Alternating Harmonic Series rearrangements of   Let be any real number. There exists a rearrangement of the series which converges to .   "
},
{
  "id": "problem-44",
  "level": "2",
  "url": "PowerSeriesQuestions-SeriesAnomalies.html#problem-44",
  "type": "Problem",
  "number": "5.2.3",
  "title": "",
  "body": " series Alternating Harmonic Series rearrangements of   Show that there is a rearrangement of which diverges to .   "
},
{
  "id": "prob_RearrangeDivToNegInf",
  "level": "2",
  "url": "PowerSeriesQuestions-SeriesAnomalies.html#prob_RearrangeDivToNegInf",
  "type": "Problem",
  "number": "5.2.4",
  "title": "",
  "body": " series Alternating Harmonic Series rearrangements of   Show that there is a rearrangement of which diverges to .   "
},
{
  "id": "PowerSeriesQuestions-AddProb",
  "level": "1",
  "url": "PowerSeriesQuestions-AddProb.html",
  "type": "Section",
  "number": "5.3",
  "title": "Additional Problems",
  "body": " Additional Problems   Taylor's Formula drill problems   Use Taylor's formula to find the Taylor series of the given function expanded about the given point .     ,      ,      ,      ,     "
},
{
  "id": "problem-46",
  "level": "2",
  "url": "PowerSeriesQuestions-AddProb.html#problem-46",
  "type": "Problem",
  "number": "5.3.1",
  "title": "",
  "body": " Taylor's Formula drill problems   Use Taylor's formula to find the Taylor series of the given function expanded about the given point .     ,      ,      ,      ,    "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Section",
  "number": "6.1",
  "title": "Joseph Fourier and His Series",
  "body": "Joseph Fourier and His Series  Applying mathematics to physical problems such as heat flow in a solid body drew much attention in the latter part of the 1700's and the early part of the 1800's. One of the people to attack the heat flow problem was   Jean Baptiste Joseph Fourier  Fourier, Jean Baptiste Joseph portrait of     Fourier, Jean Baptiste Joseph Jean Baptiste Joseph Fourier. Fourier submitted a manuscript on the subject, Sur la propagation de la chaleur ( On the Propagation of Heat ), to the Institut National des Sciences et des Arts in 1807. These ideas were subsequently published in La theorie analytique de la chaleur ( The Analytic Theory of Heat (1822) ).  To examine Fourier's ideas, consider the example of a thin wire of length one, which is perfectly insulated and whose endpoints are held at a fixed temperature of zero. Given an initial temperature distribution in the wire, the problem is to monitor the temperature of the wire at any point and at any time . Specifically, if we let denote the temperature of the wire at point at time , then it can be shown that must satisfy the one-dimensional heat equation , where is a positive constant known as the thermal diffusivity. If the initial temperature distribution is given by the function , then the we are seeking must satisfy all of the following  .  To solve this, Fourier employed what is now referred to as Fourier's method of separation of variables. Specifically, Fourier looked for solutions of the form ; that is, solutions where the -part can be separated from the -part. Assuming that has this form, we get and . Substituting these into the differential equation , we obtain .  Since the left-hand side involves no 's and the right-hand side involves no 's, both sides must equal a constant . Thus we have .     Heat Equation, the  Heat Equation, the parameter must be less than zero Show that satisfies the equation , where , and are arbitrary constants. Use the physics of the problem to show that if is not constantly zero, then .    Consider .    Using the result from problem that , we will let .     Heat Equation, the  Heat Equation, the solving for Show that satisfies the equation , where and are arbitrary constants. Use the boundary conditions , to show that and . Conclude that if is not constantly zero, then , where is any integer.       Heat Equation, the fundamental solutions of   Show that if and satisfy the equations and then satisfy these as well, where and are arbitrary constants.     Fourier, Jean Baptiste Joseph Putting all of these results together, Fourier surmised that the general solution to could be expressed as the series .  All that is left is to have satisfy the initial condition , . That is, we need to find coefficients , such that .  The idea of representing a function as a series of sine waves was proposed by Daniel Bernoulli in 1753 while examining the problem of modeling a vibrating string. Unfortunately for Bernoulli, he didn't know how to compute the coefficients in such a series representation. What distinguished Fourier was that he developed a technique to compute these coefficients. The key is the result of the following problem.     orthogonality of  orthogonality of Let and be positive integers. Show     Armed with the result from Problem , Fourier, Jean Baptiste Joseph Fourier could compute the coefficients in the series representation in the following manner. Since we are trying to find for a particular (albeit general) , we will temporarily change the index in the summation from to . With this in mind, consider   This leads to the formula .  The above series with is called the Fourier (sine) series of .    Let's apply this to the following function, , whose graph of this function is seen below.        Fourier Series sine series of an odd function Let be a positive integer. Show that if then and show that the Fourier sine series of is given by     To check if this series really does, in fact, represent on , let be the partial sum of the series and use the graphing tool below to view the graph of for several values of .  That is, denotes the partial sum of the series. We will graph for .                                       As you can see, it appears that as we add more terms to the partial sum, , it looks more and more like the original function . This would lead us to believe that the series converges to the function and that . is a valid representation of as a Fourier series.  Recall, that when we represented a function as a power series, we freely differentiated and integrated the series term by term as though it was a polynomial. Let's do the same with this Fourier series.  To start, notice that the derivative of is given by .  This derivative does not exist at and its graph is given by   If we differentiate the Fourier series term-by-term, we obtain .  Again, if we let be the partial sum of this Fourier cosine series and plot for , we obtain               In fact, if we were to graph the series cos , we would obtain     Notice that this agrees with the graph of , except that didn't exist at , and this series takes on the value at . Notice also, that every partial sum of this series is continuous, since it is a finite combination of continuous cosine functions. This agrees with what you learned in calculus, the (finite) sum of continuous functions is always continuous. In the 1700's, this was also assumed to be true for infinite series, because every time a power series converged to a function, that function happened to be continuous. This never failed for power series, so this example was a bit disconcerting as it is an example of the sum of infinitely many continuous functions which is, in this case, discontinuous. Was it possible that there was some power series which converged to a function which was not continuous? Even if there wasn't, what was the difference between power series and this Fourier series?  Even more disconcerting is what happens if we try differentiating the series term-by-term. Given the above graph of this series, the derivative of it should be constantly 0, except at , where the derivative wouldn't exist. Using the old adage that the derivative of a sum is the sum of the derivatives, we differentiate this series term-by-term to obtain the series .  If we sum the first forty terms of this series, we get       We knew that there might be a problem at but this is crazy! The series seems to not be converging to zero at all!     Fourier Series  Fourier Series divergent Fourier series example Show that when  .     Problem shows that when we differentiate the series term by term, this differentiated series doesn't converge to anything at , let alone converge to zero. In this case, the old calculus rule that the derivative of a sum is the sum of the derivatives does not apply for this infinite sum, though it did apply before. As if the continuity issue wasn't bad enough before, this was even worse. Power series were routinely differentiated and integrated term-by-term. This was part of their appeal. They were treated like infinite polynomials. Either there is some power series lurking that refuses to behave nicely, or there is some property that power series have that not all Fourier series have.  Could it be that everything we did in Chapter was bogus?  Fortunately, the answer to that question is no. Power series are generally much more well-behaved than Fourier series. Whenever a power series converges, the function it converges to will be continuous. As long as one stays inside the interval of convergence, power series can be differentiated and integrated term-by-term. Power series have something going for them that your average Fourier series does not. (We need to develop the machinery to know what that something is.) None of this is any more obvious to us than it was to mathematicians at the beginning of the nineteenth century. What they did know was that relying on intuition was perilous and rigorous formulations were needed to either justify or dismiss these intuitions. In some sense, the nineteenth century was the morning after the mathematical party that went on throughout the eighteenth century.     orthogonality of  orthogonality of Let and be positive integers. Show .       Fourier Series computing the coefficients Use the result of Problem to show that if on , then        Fourier Series cosine series the Fourier cosine series of Apply the result of Problem to show that the Fourier cosine series of on is given by .  Let and plot for  . How does this compare to the function on ? What if you plot it for      Fourier Series term by term differentiation of   Differentiate the series term by term and plot various partial sums for that series on . How does this compare to the derivative of on that interval?    Differentiate the series you obtained in part a and plot various partial sums of that on . How does this compare to the second derivative of on that interval?    "
},
{
  "id": "figure-26",
  "level": "2",
  "url": "section-11.html#figure-26",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": " Jean Baptiste Joseph Fourier  Fourier, Jean Baptiste Joseph portrait of   "
},
{
  "id": "prob_HarmonicMotion",
  "level": "2",
  "url": "section-11.html#prob_HarmonicMotion",
  "type": "Problem",
  "number": "6.1.2",
  "title": "",
  "body": "   Heat Equation, the  Heat Equation, the parameter must be less than zero Show that satisfies the equation , where , and are arbitrary constants. Use the physics of the problem to show that if is not constantly zero, then .    Consider .   "
},
{
  "id": "problem-48",
  "level": "2",
  "url": "section-11.html#problem-48",
  "type": "Problem",
  "number": "6.1.3",
  "title": "",
  "body": "   Heat Equation, the  Heat Equation, the solving for Show that satisfies the equation , where and are arbitrary constants. Use the boundary conditions , to show that and . Conclude that if is not constantly zero, then , where is any integer.   "
},
{
  "id": "problem-49",
  "level": "2",
  "url": "section-11.html#problem-49",
  "type": "Problem",
  "number": "6.1.4",
  "title": "",
  "body": "   Heat Equation, the fundamental solutions of   Show that if and satisfy the equations and then satisfy these as well, where and are arbitrary constants.   "
},
{
  "id": "prob_SinOrthogonality",
  "level": "2",
  "url": "section-11.html#prob_SinOrthogonality",
  "type": "Problem",
  "number": "6.1.5",
  "title": "",
  "body": "   orthogonality of  orthogonality of Let and be positive integers. Show    "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-11.html#example-2",
  "type": "Example",
  "number": "6.1.6",
  "title": "",
  "body": "  Let's apply this to the following function, , whose graph of this function is seen below.    "
},
{
  "id": "problem-51",
  "level": "2",
  "url": "section-11.html#problem-51",
  "type": "Problem",
  "number": "6.1.7",
  "title": "",
  "body": "   Fourier Series sine series of an odd function Let be a positive integer. Show that if then and show that the Fourier sine series of is given by    "
},
{
  "id": "figure-27",
  "level": "2",
  "url": "section-11.html#figure-27",
  "type": "Figure",
  "number": "6.1.8",
  "title": "",
  "body": "      "
},
{
  "id": "figure-28",
  "level": "2",
  "url": "section-11.html#figure-28",
  "type": "Figure",
  "number": "6.1.9",
  "title": "",
  "body": "   "
},
{
  "id": "figure-29",
  "level": "2",
  "url": "section-11.html#figure-29",
  "type": "Figure",
  "number": "6.1.10",
  "title": "",
  "body": "   "
},
{
  "id": "prob_FourierDiverge",
  "level": "2",
  "url": "section-11.html#prob_FourierDiverge",
  "type": "Problem",
  "number": "6.1.11",
  "title": "",
  "body": "   Fourier Series  Fourier Series divergent Fourier series example Show that when  .   "
},
{
  "id": "prob_Fourier_Series-orthogonality",
  "level": "2",
  "url": "section-11.html#prob_Fourier_Series-orthogonality",
  "type": "Problem",
  "number": "6.1.12",
  "title": "",
  "body": "   orthogonality of  orthogonality of Let and be positive integers. Show .   "
},
{
  "id": "prob_fouriercoef",
  "level": "2",
  "url": "section-11.html#prob_fouriercoef",
  "type": "Problem",
  "number": "6.1.13",
  "title": "",
  "body": "   Fourier Series computing the coefficients Use the result of Problem to show that if on , then    "
},
{
  "id": "problem-55",
  "level": "2",
  "url": "section-11.html#problem-55",
  "type": "Problem",
  "number": "6.1.14",
  "title": "",
  "body": "   Fourier Series cosine series the Fourier cosine series of Apply the result of Problem to show that the Fourier cosine series of on is given by .  Let and plot for  . How does this compare to the function on ? What if you plot it for    "
},
{
  "id": "problem-56",
  "level": "2",
  "url": "section-11.html#problem-56",
  "type": "Problem",
  "number": "6.1.15",
  "title": "",
  "body": " Fourier Series term by term differentiation of   Differentiate the series term by term and plot various partial sums for that series on . How does this compare to the derivative of on that interval?    Differentiate the series you obtained in part a and plot various partial sums of that on . How does this compare to the second derivative of on that interval?   "
},
{
  "id": "SeqRealNum",
  "level": "1",
  "url": "SeqRealNum.html",
  "type": "Section",
  "number": "7.1",
  "title": "Sequences of Real Numbers",
  "body": " Sequences of Real Numbers  In Chapter , we developed the equation , and we mentioned there were limitations to this power series representation. For example, substituting and into this expression leads to which are rather hard to accept. On the other hand, if we substitute into the expression we get which seems more palatable until we think about it. We can add two numbers together by the method we all learned in elementary school. Or three. Or any finite set of numbers, at least in principle. But infinitely many? What does that even mean? Before we can add infinitely many numbers together we must find a way to give meaning to the idea.  To do this, we examine an infinite sum by thinking of it as a sequence of finite partial sums. In our example, we would have the following sequence of partial sums. .  We can plot these sums on a number line to see what they tend toward as gets large.     Since each partial sum is located at the midpoint between the previous partial sum and , it is reasonable to suppose that these sums tend to the number 2. Indeed, you probably have seen an expression such as  justified by a similar argument. Of course, the reliance on such pictures and words is fine if we are satisfied with intuition. However, we must be able to make these intuitions rigorous without relying on pictures or nebulous words such as approaches.   No doubt you are wondering What's wrong with the word approaches ? It seems clear enough to me. This is often a sticking point. But if we think carefully about what we mean by the word approach we see that there is an implicit assumption that will cause us some difficulties later if we don't expose it.  To see this consider the sequence . Clearly it approaches zero, right? But, doesn't it also approach  It does, in the sense that each term gets closer to than the one previous. But it also approaches  , , or even in the same sense. That's the problem with the word approaches. It just says that we're getting closer to something than we were in the previous step. It does not tell us that we are actually getting close. Since the moon moves in an elliptical orbit about the earth for part of each month it is approaching the earth. The moon gets clos er to the earth but, thankfully, it does not get close to the earth. The implicit assumption we alluded to earlier is this: When we say that the sequence  approaches zero we mean that it is getting close not clos er . Ordinarily this kind of vagueness in our language is pretty innocuous. When we say approaches in casual conversation we can usually tell from the context of the conversation whether we mean getting close to or getting closer to. But when speaking mathematically we need to be more careful, more explicit, in the language we use.  So how can we change the language we use so that this ambiguity is eliminated? Let's start out by recognizing, rigorously, what we mean when we say that a sequence converges to zero. For example, you would probably want to say that the sequence converges to zero. Is there a way to give this meaning without relying on pictures or intuition?  One way would be to say that we can make as close to zero as we wish, provided we make large enough. But even this needs to be made more specific. For example, we can get to within a distance of of provided we make , we can get to within a distance of of provided we make , etc. After a few such examples it is apparent that given any arbitrary distance , we can get to within of provided we make . This leads to the following definition.     sequences convergence to zero Let be a sequence of real numbers. We say that  converges to 0 and write provided for any , there is a real number such that if , then .     Notes on Definition :   This definition is the formal version of the idea we just talked about; that is, given an arbitrary distance , we must be able to find a specific number such that is within of , whenever . The is the answer to the question of how large is large enough to put this close to .    Even though we didn't need it in the example , the absolute value appears in the definition because we need to make the distance from to 0 smaller than . Without the absolute value in the definition, we would be able to prove such outrageous statements as , which we obviously don't want.    The statement can also be written as or . (See the Problem below.) Any one of these equivalent formulations can be used to prove convergence. Depending on the application, one of these may be more advantageous to use than the others.    Any time an can be found that works for a particular , any number will work for that as well, since if then .        absolute value Let and be real numbers with . Prove if and only if . Notice that this can be extended to if and only if .    To illustrate how this definition makes the above ideas rigorous, let's use it to prove that .   Let be given. Let . If , then and so . Hence by definition, .   Notice that this proof is rigorous and makes no reference to vague notions such as getting smaller or approaching infinity. It has three components:  provide the challenge of a distance ,  identify a real number , and  show that this works for this given .  There is also no explanation about where came from. While it is true that this choice of is not surprising in light of the scrapwork we did before the definition, the motivation for how we got it is not in the formal proof nor is it required. In fact, such scrapwork is typically not included in a formal proof. For example, consider the following.    Use the definition of convergence to zero to prove .     Let . Let . If , then and . Thus . Hence by definition, .   Notice that the came out of nowhere, but you can probably see the thought process that went into this choice: We needed to use the inequality . Again this scrapwork is not part of the formal proof, but it is typically necessary for finding what should be. You might be able to do the next problem without doing any scrapwork first, but don't hesitate to do scrapwork if you need it.     convergence of a sequence convergence to zero drill Use the definition of convergence to zero to prove the following.              As the sequences get more complicated, doing scrapwork ahead of time will become more necessary.    Use the definition of convergence to zero to prove .   SCRAPWORK   Given an , we need to see how large to make in order to guarantee that . First notice that . Also, notice that if , then . So as long as , we have . We can make this less than if we make . This means we need to make and , simultaneously. These can be done if we let be the maximum of these two numbers. This sort of thing comes up regularly, so the notation was developed to mean the maximum of these two numbers. Notice that if then and . We're now ready for the formal proof.     Let . Let . If , then and . Thus we have and . Therefore .  Hence by definition, .   Again we emphasize that the scrapwork is not explicitly a part of the formal proof. However, if you look carefully, you can always find the scrapwork in the formal proof.     convergence of a sequence convergence to zero drill Use the definition of convergence to zero to prove      limit if   Let be a nonzero real number with and let .    Solve the inequality for     Use part (a) to prove .    We can negate this definition to prove that a particular sequence does not converge to zero.    Use the definition to prove that the sequence does not converge to zero.    Before we provide this proof, let's analyze what it means for a sequence to not converge to zero. Converging to zero means that any time a distance is given, we must be able to respond with a number such that for every . To have this not happen, we must be able to find some such that no choice of will work. Of course, if we find such an , then any smaller one will fail to have such an , but we only need one to mess us up. If you stare at the example long enough, you see that any with will cause problems. For our purposes, we will let .   Let and let be any integer. If we let be any non-negative integer with , then , but . Thus no choice of will satisfy the conditions of the definition for this , (namely that for all ) and so .      limit definition of non-existence Negate the definition of to provide a formal definition for .     limit definition of non-existence   Use the definition to prove .    Now that we have a handle on how to rigorously prove that a sequence converges to zero, let's generalize this to a formal definition for a sequence converging to something else. Basically, we want to say that a sequence converges to a real number , provided the difference converges to zero. This leads to the following definition:     sequences convergence  convergence of a sequence Let be a sequence of real numbers and let be a real number. We say that {converges to} and write provided for any , there is a real number such that if , then .    {Notes on Definition }     Clearly .    Again notice that this says that we can make as close to as we wish (within ) by making large enough ( . As before, this definition makes these notions very specific.    Notice that can be written in the following equivalent forms                          and we are free to use any one of these which is convenient at the time.     As an example, let's use this definition to prove that the sequence in Problem , in fact, converges to 1.    Prove .   SCRAPWORK   Given an , we need to get . This prompts us to do some algebra. .  This in turn, seems to suggest that should work.     Let . Let . If , then and so . Hence .  Thus by definition .   Notice again that the scrapwork is not part of the formal proof and the author of a proof is not obligated to tell where the choice of came from (although the thought process can usually be seen in the formal proof). The formal proof contains only the requisite three parts: provide the challenge of an arbitrary , provide a specific , and show that this works for the given .  Also notice that given a specific sequence such as , the definition does not indicate what the limit would be if, in fact, it exists. Once an educated guess is made as to what the limit should be, the definition only verifies that this intuition is correct.  This leads to the following question: If intuition is needed to determine what a limit of a sequence should be, then what is the purpose of this relatively non-intuitive, complicated definition?  Remember that when these rigorous formulations were developed, intuitive notions of convergence were already in place and had been used with great success. This definition was developed to address the foundational issues. Could our intuitions be verified in a concrete fashion that was above reproach? This was the purpose of this non-intuitive definition. It was to be used to verify that our intuition was, in fact, correct and do so in a very prescribed manner. For example, if is a fixed number, then you would probably say as approaches infinity, approaches . After all, we did already prove that . We should be able to back up this intuition with our rigorous definition.     limit if Let . Use the definition to prove .    You will probably need to separate this into two cases: and .     sequences definition of divergence  convergence definition of nonconvergence of a sequence   Provide a rigorous definition for .    Use your definition to show that for any real number , .   Choose and use the fact that is equivalent to to show that no choice of will work for this .    "
},
{
  "id": "def_ConvergeToZero",
  "level": "2",
  "url": "SeqRealNum.html#def_ConvergeToZero",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "   sequences convergence to zero Let be a sequence of real numbers. We say that  converges to 0 and write provided for any , there is a real number such that if , then .   "
},
{
  "id": "p-464",
  "level": "2",
  "url": "SeqRealNum.html#p-464",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Notes on Definition "
},
{
  "id": "prob_absolute_value",
  "level": "2",
  "url": "SeqRealNum.html#prob_absolute_value",
  "type": "Problem",
  "number": "7.1.2",
  "title": "",
  "body": "   absolute value Let and be real numbers with . Prove if and only if . Notice that this can be extended to if and only if .   "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "SeqRealNum.html#proof-3",
  "type": "Proof",
  "number": "7.1.1",
  "title": "",
  "body": " Let be given. Let . If , then and so . Hence by definition, .  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "SeqRealNum.html#example-3",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Use the definition of convergence to zero to prove .   "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "SeqRealNum.html#proof-4",
  "type": "Proof",
  "number": "7.1.2",
  "title": "",
  "body": " Let . Let . If , then and . Thus . Hence by definition, .  "
},
{
  "id": "problem-58",
  "level": "2",
  "url": "SeqRealNum.html#problem-58",
  "type": "Problem",
  "number": "7.1.4",
  "title": "",
  "body": "   convergence of a sequence convergence to zero drill Use the definition of convergence to zero to prove the following.             "
},
{
  "id": "sec_defin-conv-sequ",
  "level": "2",
  "url": "SeqRealNum.html#sec_defin-conv-sequ",
  "type": "Example",
  "number": "7.1.5",
  "title": "",
  "body": "  Use the definition of convergence to zero to prove .   SCRAPWORK   Given an , we need to see how large to make in order to guarantee that . First notice that . Also, notice that if , then . So as long as , we have . We can make this less than if we make . This means we need to make and , simultaneously. These can be done if we let be the maximum of these two numbers. This sort of thing comes up regularly, so the notation was developed to mean the maximum of these two numbers. Notice that if then and . We're now ready for the formal proof.   "
},
{
  "id": "proof-5",
  "level": "2",
  "url": "SeqRealNum.html#proof-5",
  "type": "Proof",
  "number": "7.1.3",
  "title": "",
  "body": " Let . Let . If , then and . Thus we have and . Therefore .  Hence by definition, .  "
},
{
  "id": "problem-59",
  "level": "2",
  "url": "SeqRealNum.html#problem-59",
  "type": "Problem",
  "number": "7.1.6",
  "title": "",
  "body": "   convergence of a sequence convergence to zero drill Use the definition of convergence to zero to prove    "
},
{
  "id": "prob_sequences3",
  "level": "2",
  "url": "SeqRealNum.html#prob_sequences3",
  "type": "Problem",
  "number": "7.1.7",
  "title": "",
  "body": " limit if   Let be a nonzero real number with and let .    Solve the inequality for     Use part (a) to prove .   "
},
{
  "id": "ex_zero-two-not-converge",
  "level": "2",
  "url": "SeqRealNum.html#ex_zero-two-not-converge",
  "type": "Example",
  "number": "7.1.8",
  "title": "",
  "body": "  Use the definition to prove that the sequence does not converge to zero.   "
},
{
  "id": "proof-6",
  "level": "2",
  "url": "SeqRealNum.html#proof-6",
  "type": "Proof",
  "number": "7.1.4",
  "title": "",
  "body": " Let and let be any integer. If we let be any non-negative integer with , then , but . Thus no choice of will satisfy the conditions of the definition for this , (namely that for all ) and so .  "
},
{
  "id": "prob_sequences-not_converge_to_zero",
  "level": "2",
  "url": "SeqRealNum.html#prob_sequences-not_converge_to_zero",
  "type": "Problem",
  "number": "7.1.9",
  "title": "",
  "body": "   limit definition of non-existence Negate the definition of to provide a formal definition for .   "
},
{
  "id": "prob_sequences4",
  "level": "2",
  "url": "SeqRealNum.html#prob_sequences4",
  "type": "Problem",
  "number": "7.1.10",
  "title": "",
  "body": " limit definition of non-existence   Use the definition to prove .   "
},
{
  "id": "def_ConvergenceOfASequence",
  "level": "2",
  "url": "SeqRealNum.html#def_ConvergenceOfASequence",
  "type": "Definition",
  "number": "7.1.11",
  "title": "",
  "body": "   sequences convergence  convergence of a sequence Let be a sequence of real numbers and let be a real number. We say that {converges to} and write provided for any , there is a real number such that if , then .   "
},
{
  "id": "example_SeriesConverge",
  "level": "2",
  "url": "SeqRealNum.html#example_SeriesConverge",
  "type": "Example",
  "number": "7.1.12",
  "title": "",
  "body": "  Prove .   SCRAPWORK   Given an , we need to get . This prompts us to do some algebra. .  This in turn, seems to suggest that should work.   "
},
{
  "id": "proof-7",
  "level": "2",
  "url": "SeqRealNum.html#proof-7",
  "type": "Proof",
  "number": "7.1.5",
  "title": "",
  "body": " Let . Let . If , then and so . Hence .  Thus by definition .  "
},
{
  "id": "problem-63",
  "level": "2",
  "url": "SeqRealNum.html#problem-63",
  "type": "Problem",
  "number": "7.1.13",
  "title": "",
  "body": "   limit if Let . Use the definition to prove .    You will probably need to separate this into two cases: and .   "
},
{
  "id": "problem-64",
  "level": "2",
  "url": "SeqRealNum.html#problem-64",
  "type": "Problem",
  "number": "7.1.14",
  "title": "",
  "body": " sequences definition of divergence  convergence definition of nonconvergence of a sequence   Provide a rigorous definition for .    Use your definition to show that for any real number , .   Choose and use the fact that is equivalent to to show that no choice of will work for this .   "
},
{
  "id": "LimitAsPrimary",
  "level": "1",
  "url": "LimitAsPrimary.html",
  "type": "Section",
  "number": "7.2",
  "title": "The Limit as a Primary Tool",
  "body": " The Limit as a Primary Tool  As you've seen from the previous sections, the formal definition of the convergence of a sequence is meant to capture rigorously our intuitive understanding of convergence. However, the definition itself is an unwieldy tool. If only there was a way to be rigorous without having to run back to the definition each time. Fortunately, there is a way. If we can use the definition to prove some general rules about limits then we could use these rules whenever they applied and be assured that everything was still rigorous. A number of these should look familiar from calculus.     limit of a constant sequence  sequences constant sequences Let be a constant sequence. Show that .    In proving the familiar limit theorems, the following will prove to be a very useful tool.   Triangle Inequalities      Triangle Inequality:  Triangle Inequalities Triangle Inequality  Let and be real numbers. Then .    Reverse Triangle Inequality:  Triangle Inequalities Reverse Triangle Inequalitiy  Let and be real numbers. Then         Triangle Inequalities Triangle Inequality   Prove Lemma .   For the Reverse Triangle Inequality, consider .    Show .   You want to show and .       limit termwise sums of If and , then .    We will often informally state this theorem as the limit of a sum is the sum of the limits. However, to be absolutely precise, what it says is that if we already know that two sequences converge, then the sequence formed by summing the corresponding terms of those two sequences will converge and, in fact, converge to the sum of those individual limits. We'll provide the scrapwork for the proof of this and leave the formal write-up as an exercise. Note the use of the triangle inequality in the proof.       sequences termwise sums of Prove Theorem .   SCRAPWORK:   If we let , then we want so that if , then . We know that and , so we can make and as small as we wish, provided we make large enough. Let's go back to what we want, to see if we can close the gap between what we know and what we want. by the triangle inequality. To make this whole thing less than , it makes sense to make each part less than . it makes sense to make each part less than . Fortunately, we can do that as the definitions of and allow us to make and arbitrarily small. Specifically, since , there exists an such that if then . Also since , there exists an such that if then . Since we want both of these to occur, it makes sense to let max . This should be the that we seek.       limit products of If and , then .     SCRAPWORK: Given , we want so that if , then . One of the standard tricks in analysis is to uncancel. In this case we will subtract and add a convenient term. Normally these would cancel out, which is why we say that we will uncancel to put them back in. You already saw an example of this in proving the Reverse Triangle Inequality ( Problem ). In the present case, consider .  We can make this whole thing less than , provided we make each term in the sum less than . We can make if we make . But wait! What if ? We could handle this as a separate case or we can do the following slick trick. Notice that we can add one more line to the above string of inequalities: . Now we can make and not worry about dividing by zero.  Making requires a bit more finesse. At first glance, one would be tempted to try and make . Even if we ignore the fact that we could be dividing by zero (which we could handle), we have a bigger problem. According to the definition of , we can make smaller than any given fixed positive number, as long as we make large enough (larger than some which goes with a given epsilon). Unfortunately, is not fixed as it has the variable in it; there is no reason to believe that a single will work with all of these simultaneously. To handle this impasse, we need the following:   sequences convergence of convergent sequences are bounded    A Convergent Sequence Is Bounded.   If , then there exists such that for all .     sequences convergence of convergent sequences are bounded   Prove Lemma .    We know that there exists such that if , then . Let max , where represents the smallest integer greater than or equal to . Also, notice that this is not a convergence proof so it is not safe to think of as a large number.   Actually, this is a dangerous habit to fall into even in convergence proofs.     Armed with this bound , we can add on one more inequality to the above scrapwork to get   At this point, we should be able to make the last line of this less than .   END OF SCRAPWORK      sequences termwise product of Prove Theorem .      (Corollary to Theorem ) If and , then .       sequences constant multiples of  limit of a constant times a sequence Prove Corollary .    Just as Theorem says that the limit of a product is the product of the limits, we can prove the analogue for quotients.     limit quotients of Suppose and . Also suppose and . Then .       sequences termwise quotient of Prove Theorem .   SCRAPWORK   To prove this, let's look at the special case of trying to prove . The general case will follow from this and Theorem . Consider . We are faced with the same dilemma as before; we need to get bounded above. This means we need to get bounded away from zero (at least for large enough ).  This can be done as follows. Since , then . Thus, by the definition of , there exists such that if , then . Thus when , and so . This says that for , . We should be able to make this smaller than a given , provided we make large enough.    These theorems allow us to compute limits of complicated sequences and rigorously verify that these are, in fact, the correct limits without resorting to the definition of a limit.     limit identifing the theorems used in a limit Identify all of the theorems implicitly used to show that .  Notice that this presumes that all of the individual limits exist. This will become evident as the limit is decomposed.    There is one more tool that will prove to be valuable.   limit Squeeze Theorem for Sequences    Squeeze Theorem for Sequences   Let , and be sequences of real numbers with positive integers . Suppose . Then must converge and .     limit Squeeze Theorem   Prove Theorem .    This is probably a place where you would want to use instead of .    The Squeeze Theorem holds even if holds for only sufficiently large ; i.e., for larger than some fixed . This is true because when you find an that works in the original proof, this can be modified by choosing max . Also note that this theorem really says two things: converges and it converges to . This subtle point affects how one should properly use the Squeeze Theorem.    Prove .     Notice that . Since , then by the Squeeze Theorem, .   Notice that this proof is completely rigorous. Also notice that this is the proper way to use the Squeeze Theorem. Here is an example of an {improper} use of the Squeeze Theorem.  How not to prove Example . Notice that , so and .  This is incorrect in form because it presumes that exists, which we don't yet know. If we knew that the limit existed to begin with, then this would be fine. The Squeeze Theorem proves that the limit does in fact exist, but it must be so stated.  These general theorems will allow us to rigorously explore convergence of power series in the next chapter without having to appeal directly to the definition of convergence. However, you should remember that we used the definition to prove these results and there will be times when we will need to apply the definition directly. However, before we go into that, let's examine divergence a bit more closely.  "
},
{
  "id": "problem-65",
  "level": "2",
  "url": "LimitAsPrimary.html#problem-65",
  "type": "Problem",
  "number": "7.2.1",
  "title": "",
  "body": "   limit of a constant sequence  sequences constant sequences Let be a constant sequence. Show that .   "
},
{
  "id": "Tri-RevTri-Ineq",
  "level": "2",
  "url": "LimitAsPrimary.html#Tri-RevTri-Ineq",
  "type": "Lemma",
  "number": "7.2.2",
  "title": "",
  "body": " Triangle Inequalities      Triangle Inequality:  Triangle Inequalities Triangle Inequality  Let and be real numbers. Then .    Reverse Triangle Inequality:  Triangle Inequalities Reverse Triangle Inequalitiy  Let and be real numbers. Then       "
},
{
  "id": "Tri-RevTri-Ineq_prob",
  "level": "2",
  "url": "LimitAsPrimary.html#Tri-RevTri-Ineq_prob",
  "type": "Problem",
  "number": "7.2.3",
  "title": "",
  "body": " Triangle Inequalities Triangle Inequality   Prove Lemma .   For the Reverse Triangle Inequality, consider .    Show .   You want to show and .   "
},
{
  "id": "thm_SumOfSequences",
  "level": "2",
  "url": "LimitAsPrimary.html#thm_SumOfSequences",
  "type": "Theorem",
  "number": "7.2.4",
  "title": "",
  "body": "   limit termwise sums of If and , then .   "
},
{
  "id": "problem-67",
  "level": "2",
  "url": "LimitAsPrimary.html#problem-67",
  "type": "Problem",
  "number": "7.2.5",
  "title": "",
  "body": "   sequences termwise sums of Prove Theorem .   SCRAPWORK:   If we let , then we want so that if , then . We know that and , so we can make and as small as we wish, provided we make large enough. Let's go back to what we want, to see if we can close the gap between what we know and what we want. by the triangle inequality. To make this whole thing less than , it makes sense to make each part less than . it makes sense to make each part less than . Fortunately, we can do that as the definitions of and allow us to make and arbitrarily small. Specifically, since , there exists an such that if then . Also since , there exists an such that if then . Since we want both of these to occur, it makes sense to let max . This should be the that we seek.   "
},
{
  "id": "thm_LimitOfProduct",
  "level": "2",
  "url": "LimitAsPrimary.html#thm_LimitOfProduct",
  "type": "Theorem",
  "number": "7.2.6",
  "title": "",
  "body": "   limit products of If and , then .   "
},
{
  "id": "p-542",
  "level": "2",
  "url": "LimitAsPrimary.html#p-542",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "SCRAPWORK: "
},
{
  "id": "lemma_BoundedConvergent",
  "level": "2",
  "url": "LimitAsPrimary.html#lemma_BoundedConvergent",
  "type": "Lemma",
  "number": "7.2.7",
  "title": "",
  "body": " sequences convergence of convergent sequences are bounded    A Convergent Sequence Is Bounded.   If , then there exists such that for all .   "
},
{
  "id": "prob_BoundedConvergent",
  "level": "2",
  "url": "LimitAsPrimary.html#prob_BoundedConvergent",
  "type": "Problem",
  "number": "7.2.8",
  "title": "",
  "body": " sequences convergence of convergent sequences are bounded   Prove Lemma .    We know that there exists such that if , then . Let max , where represents the smallest integer greater than or equal to . Also, notice that this is not a convergence proof so it is not safe to think of as a large number.   Actually, this is a dangerous habit to fall into even in convergence proofs.    "
},
{
  "id": "p-552",
  "level": "2",
  "url": "LimitAsPrimary.html#p-552",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "END OF SCRAPWORK "
},
{
  "id": "problem-69",
  "level": "2",
  "url": "LimitAsPrimary.html#problem-69",
  "type": "Problem",
  "number": "7.2.9",
  "title": "",
  "body": "   sequences termwise product of Prove Theorem .   "
},
{
  "id": "cor_1",
  "level": "2",
  "url": "LimitAsPrimary.html#cor_1",
  "type": "Corollary",
  "number": "7.2.10",
  "title": "",
  "body": "  (Corollary to Theorem ) If and , then .   "
},
{
  "id": "problem-70",
  "level": "2",
  "url": "LimitAsPrimary.html#problem-70",
  "type": "Problem",
  "number": "7.2.11",
  "title": "",
  "body": "   sequences constant multiples of  limit of a constant times a sequence Prove Corollary .   "
},
{
  "id": "thm_LimitOfQuotient",
  "level": "2",
  "url": "LimitAsPrimary.html#thm_LimitOfQuotient",
  "type": "Theorem",
  "number": "7.2.12",
  "title": "",
  "body": "   limit quotients of Suppose and . Also suppose and . Then .   "
},
{
  "id": "problem-71",
  "level": "2",
  "url": "LimitAsPrimary.html#problem-71",
  "type": "Problem",
  "number": "7.2.13",
  "title": "",
  "body": "   sequences termwise quotient of Prove Theorem .   SCRAPWORK   To prove this, let's look at the special case of trying to prove . The general case will follow from this and Theorem . Consider . We are faced with the same dilemma as before; we need to get bounded above. This means we need to get bounded away from zero (at least for large enough ).  This can be done as follows. Since , then . Thus, by the definition of , there exists such that if , then . Thus when , and so . This says that for , . We should be able to make this smaller than a given , provided we make large enough.   "
},
{
  "id": "problem-72",
  "level": "2",
  "url": "LimitAsPrimary.html#problem-72",
  "type": "Problem",
  "number": "7.2.14",
  "title": "",
  "body": "   limit identifing the theorems used in a limit Identify all of the theorems implicitly used to show that .  Notice that this presumes that all of the individual limits exist. This will become evident as the limit is decomposed.   "
},
{
  "id": "thm_SqueezeTheorem",
  "level": "2",
  "url": "LimitAsPrimary.html#thm_SqueezeTheorem",
  "type": "Theorem",
  "number": "7.2.15",
  "title": "",
  "body": " limit Squeeze Theorem for Sequences    Squeeze Theorem for Sequences   Let , and be sequences of real numbers with positive integers . Suppose . Then must converge and .   "
},
{
  "id": "problem-73",
  "level": "2",
  "url": "LimitAsPrimary.html#problem-73",
  "type": "Problem",
  "number": "7.2.16",
  "title": "",
  "body": " limit Squeeze Theorem   Prove Theorem .    This is probably a place where you would want to use instead of .   "
},
{
  "id": "example_SqzeEx",
  "level": "2",
  "url": "LimitAsPrimary.html#example_SqzeEx",
  "type": "Example",
  "number": "7.2.17",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "proof-8",
  "level": "2",
  "url": "LimitAsPrimary.html#proof-8",
  "type": "Proof",
  "number": "7.2.1",
  "title": "",
  "body": " Notice that . Since , then by the Squeeze Theorem, .  "
},
{
  "id": "DivergentSeq",
  "level": "1",
  "url": "DivergentSeq.html",
  "type": "Section",
  "number": "7.3",
  "title": "Divergence",
  "body": " Divergence  In Theorem we saw that there is a rearrangment of the alternating Harmonic series which diverges to or . In that section we did not fuss over any formal notions of divergence. We assumed instead that you are already familiar with the concept of divergence, probably from taking calculus in the past.  However we are now in the process of building precise, formal definitions for the concepts we will be using so we define the divergence of a sequence as follows.     sequences divergence of  divergence of a sequence A sequence of real numbers diverges if it does not converge to any .    It may seem unnecessarily pedantic of us to insist on formally stating such an obvious definition. After all converge and diverge are opposites in ordinary English. Why wouldn't they be mathematically opposite too? Why do we have to go to the trouble of formally defining both of them? Since they are opposites defining one implicitly defines the other doesn't it?  One way to answer that criticism is to state that in mathematics we always work from precisely stated definitions and tightly reasoned logical arguments.  But this is just more pedantry. It is a way of saying, Because we said so all dressed up in imposing language. We need to do better than that.  One reason for providing formal definitions of both convergence and divergence is that in mathematics we frequently co-opt words from natural languages like English and imbue them with mathematical meaning that is only tangentially related to the original English definition. When we take two such words which happen to be opposites in English and give them mathematical meanings which are not opposites it can be very confusing, especially at first.  This is what happened with the words open and closed. These are opposites in English: not open is closed,  not closed is open, and there is nothing which is both open and closed. But recall that an open interval on the real line, , is one that does not include either of its endpoints while a closed interval, , is one that includes both of them.  These may seem like opposites at first but they are not. To see this observe that the interval is neither open nor closed since it only contains one of its endpoints. If open and closed were mathematically opposite then every interval would be either open or closed.  Open Sets vs. Closed Sets  It is also true that is both open and closed, but an explanation of this would take us too far afield.   Mathematicians have learned to be extremely careful about this sort of thing. In the case of convergence and divergence of a series, even though these words are actually opposites mathematically (every sequence either converges or diverges and no sequence converges and diverges) it is better to say this explicitly so there can be no confusion.  A sequence can only converge to a real number, , in one way: by getting arbitrarily close to . However there are several ways a sequence might diverge.    Consider the sequence, . This clearly diverges by getting larger and larger Ooops! Let's be careful. The sequence gets larger and larger too, but it converges. What we meant to say was that the terms of the sequence become arbitrarily large as increases.  This is clearly a divergent sequence but it may not be clear how to prove this formally. Here's one way.  To show divergence we must show that the sequence satisfies the negation of the definition of convergence. That is, we must show that for every there is an such that for every , there is an with .  So let , and let be given. Let . Then for every  . Therefore the sequence diverges.    This seems to have been rather more work than we should have to do for such a simple problem. Here's another way which highlights this particular type of divergence.  First we'll need a new definition:     sequences divergence to  positive infinity divergence to A sequence, , diverges to positive infinity if for every real number , there is a real number such that .   negative infinity divergence to A sequence, , diverges to negative infinity if for every real number , there is a real number such that .   divergence to A sequence is said to diverge to infinity if it diverges to either positive or negative infinity.    In practice we want to think of as a very large number. This definition says that a sequence diverges to infinity if it becomes arbitrarily large as increases, and similarly for divergence to negative infinity.     sequences the sequence of positive integers diverges to infinity Show that diverges to infinity.       sequences divergence to  divergence divergence to infinity implies divergence Show that if diverges to infinity then diverges.    We will denote divergence to infinity as .  However, strictly speaking this is an abuse of notation since the symbol does not represent a real number. This notation can be very problematic since it looks so much like the notation we use to denote convergence: .  Nevertheless, the notation is appropriate because divergence to infinity is nice divergence in the sense that it shares many of the properties of convergence, as the next problem shows.   sequences termwise sums of   Suppose and .    Show that     Show that     Is it true that Explain.    Because divergence to positive or negative infinity shares some of the properties of convergence it is easy to get careless with it. Remember that even though we write this is still a divergent sequence in the sense that does not exist. The symbol does not represent a real number. This is just a convenient notational shorthand telling us that the sequence diverges by becoming arbitrarily large.   sequences divergence to   Suppose and and . Prove or give a counterexample:                        Finally, a sequence can diverge in other ways as the following problem displays.   sequences divergence of  sequences divergence, but not to infinity   Show that each of the following sequences diverge.                    sequences divergence, but not to infinity   Suppose that diverges but not to infinity and that is a real number. What conditions on will guarantee that:     converges?     diverges?     series Geometric Sequence divergence condition  sequences Geometric   Show that if then diverges. Will it diverge to infinity?    "
},
{
  "id": "thm_divergence_of_a_sequence",
  "level": "2",
  "url": "DivergentSeq.html#thm_divergence_of_a_sequence",
  "type": "Definition",
  "number": "7.3.1",
  "title": "",
  "body": "   sequences divergence of  divergence of a sequence A sequence of real numbers diverges if it does not converge to any .   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "DivergentSeq.html#example-8",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": "  Consider the sequence, . This clearly diverges by getting larger and larger Ooops! Let's be careful. The sequence gets larger and larger too, but it converges. What we meant to say was that the terms of the sequence become arbitrarily large as increases.  This is clearly a divergent sequence but it may not be clear how to prove this formally. Here's one way.  To show divergence we must show that the sequence satisfies the negation of the definition of convergence. That is, we must show that for every there is an such that for every , there is an with .  So let , and let be given. Let . Then for every  . Therefore the sequence diverges.   "
},
{
  "id": "def_DivToInf",
  "level": "2",
  "url": "DivergentSeq.html#def_DivToInf",
  "type": "Definition",
  "number": "7.3.3",
  "title": "",
  "body": "   sequences divergence to  positive infinity divergence to A sequence, , diverges to positive infinity if for every real number , there is a real number such that .   negative infinity divergence to A sequence, , diverges to negative infinity if for every real number , there is a real number such that .   divergence to A sequence is said to diverge to infinity if it diverges to either positive or negative infinity.   "
},
{
  "id": "problem-74",
  "level": "2",
  "url": "DivergentSeq.html#problem-74",
  "type": "Problem",
  "number": "7.3.4",
  "title": "",
  "body": "   sequences the sequence of positive integers diverges to infinity Show that diverges to infinity.   "
},
{
  "id": "problem-75",
  "level": "2",
  "url": "DivergentSeq.html#problem-75",
  "type": "Problem",
  "number": "7.3.5",
  "title": "",
  "body": "   sequences divergence to  divergence divergence to infinity implies divergence Show that if diverges to infinity then diverges.   "
},
{
  "id": "problem-76",
  "level": "2",
  "url": "DivergentSeq.html#problem-76",
  "type": "Problem",
  "number": "7.3.6",
  "title": "",
  "body": " sequences termwise sums of   Suppose and .    Show that     Show that     Is it true that Explain.   "
},
{
  "id": "problem-77",
  "level": "2",
  "url": "DivergentSeq.html#problem-77",
  "type": "Problem",
  "number": "7.3.7",
  "title": "",
  "body": " sequences divergence to   Suppose and and . Prove or give a counterexample:                       "
},
{
  "id": "problem-78",
  "level": "2",
  "url": "DivergentSeq.html#problem-78",
  "type": "Problem",
  "number": "7.3.8",
  "title": "",
  "body": " sequences divergence of  sequences divergence, but not to infinity   Show that each of the following sequences diverge.                  "
},
{
  "id": "problem-79",
  "level": "2",
  "url": "DivergentSeq.html#problem-79",
  "type": "Problem",
  "number": "7.3.9",
  "title": "",
  "body": " sequences divergence, but not to infinity   Suppose that diverges but not to infinity and that is a real number. What conditions on will guarantee that:     converges?     diverges?   "
},
{
  "id": "problem-80",
  "level": "2",
  "url": "DivergentSeq.html#problem-80",
  "type": "Problem",
  "number": "7.3.10",
  "title": "",
  "body": " series Geometric Sequence divergence condition  sequences Geometric   Show that if then diverges. Will it diverge to infinity?   "
},
{
  "id": "section-15",
  "level": "1",
  "url": "section-15.html",
  "type": "Section",
  "number": "7.4",
  "title": "Additional Problems",
  "body": " Additional Problems   convergence of a sequence implies the convergence of the absolute sequence   Prove that if then . Prove that the converse is true when , but it is not necessarily true otherwise.     sequences limit is unique   Let and be sequences with . Suppose and .  Prove .   Assume for contradiction, that and use the definition of convergence with to produce an with .    Prove that if a sequence converges, then its limit is unique. That is, prove that if and , then .     sequences if the sequence is bounded then   Prove that if the sequence is bounded then .     series Geometric series convergence\/divergence conditions for   Prove that if , then .    Use (a) to prove that if , then .       limit of ratios of polynomials Prove , provided . [Notice that since a polynomial only has finitely many roots, then the denominator will be non-zero when is sufficiently large.]     sequences difference of  limit of the difference of sequences   Prove that if and , then .     sequences lower and upper bounds for   Prove that if and , then there exists a real number such that if then .    Prove that if and , then there exists a real number such that if then .     sequences Ratio Test for   Suppose is a sequence of positive numbers such that .    Prove that if , then .   Choose with . By the previous problem,  such that if , then . Let be fixed and show . Conclude that and let .    Let be a positive real number. Prove .    "
},
{
  "id": "problem-81",
  "level": "2",
  "url": "section-15.html#problem-81",
  "type": "Problem",
  "number": "7.4.1",
  "title": "",
  "body": " convergence of a sequence implies the convergence of the absolute sequence   Prove that if then . Prove that the converse is true when , but it is not necessarily true otherwise.   "
},
{
  "id": "problem-82",
  "level": "2",
  "url": "section-15.html#problem-82",
  "type": "Problem",
  "number": "7.4.2",
  "title": "",
  "body": " sequences limit is unique   Let and be sequences with . Suppose and .  Prove .   Assume for contradiction, that and use the definition of convergence with to produce an with .    Prove that if a sequence converges, then its limit is unique. That is, prove that if and , then .   "
},
{
  "id": "problem-83",
  "level": "2",
  "url": "section-15.html#problem-83",
  "type": "Problem",
  "number": "7.4.3",
  "title": "",
  "body": " sequences if the sequence is bounded then   Prove that if the sequence is bounded then .   "
},
{
  "id": "prob_series-geometric",
  "level": "2",
  "url": "section-15.html#prob_series-geometric",
  "type": "Problem",
  "number": "7.4.4",
  "title": "",
  "body": " series Geometric series convergence\/divergence conditions for   Prove that if , then .    Use (a) to prove that if , then .   "
},
{
  "id": "problem-85",
  "level": "2",
  "url": "section-15.html#problem-85",
  "type": "Problem",
  "number": "7.4.5",
  "title": "",
  "body": "   limit of ratios of polynomials Prove , provided . [Notice that since a polynomial only has finitely many roots, then the denominator will be non-zero when is sufficiently large.]   "
},
{
  "id": "problem-86",
  "level": "2",
  "url": "section-15.html#problem-86",
  "type": "Problem",
  "number": "7.4.6",
  "title": "",
  "body": " sequences difference of  limit of the difference of sequences   Prove that if and , then .   "
},
{
  "id": "problem-87",
  "level": "2",
  "url": "section-15.html#problem-87",
  "type": "Problem",
  "number": "7.4.7",
  "title": "",
  "body": " sequences lower and upper bounds for   Prove that if and , then there exists a real number such that if then .    Prove that if and , then there exists a real number such that if then .   "
},
{
  "id": "prob_RatioTest",
  "level": "2",
  "url": "section-15.html#prob_RatioTest",
  "type": "Problem",
  "number": "7.4.8",
  "title": "",
  "body": " sequences Ratio Test for   Suppose is a sequence of positive numbers such that .    Prove that if , then .   Choose with . By the previous problem,  such that if , then . Let be fixed and show . Conclude that and let .    Let be a positive real number. Prove .   "
},
{
  "id": "TaylorSeries-IntFormRem",
  "level": "1",
  "url": "TaylorSeries-IntFormRem.html",
  "type": "Section",
  "number": "8.1",
  "title": "The Integral Form of the Remainder",
  "body": " The Integral Form of the Remainder  Now that we have a rigorous definition of the convergence of a sequence, let's apply this to Taylor series. Recall that the Taylor series of a function expanded about the point is given by   When we say that for a particular value of , what we mean is that the sequence of partial sums converges to the number . Note that the index in the summation was changed to to allow to represent the index of the sequence of partial sums. As intimidating as this may look, bear in mind that for a fixed real number , this is still a sequence of real numbers so, that saying means that and in the previous chapter we developed some tools to examine this phenomenon. In particular, we know that is equivalent to .  We have seen an example of this already. Problem of the last chapter basically had you show that the geometric series, converges to ,for by showing that .  There is generally not a readily recognizable closed form for the partial sum for a Taylor series. The geometric series is a special case. Fortunately, for the issue at hand (convergence of a Taylor series), we don't need to analyze the series itself. What we need to show is that the difference between the function and the th partial sum converges to zero. This difference is called the remainder (of the Taylor series) . (Why?)  While it is true that the remainder is simply , this form is not easy to work with. Fortunately, a number of alternate versions of this remainder are available. We will explore these in this chapter.  Recall the result from Theorem from Chapter , .  We can use this by rewriting it as .  The expression is called the integral form of the remainder for the Taylor series of , and the Taylor series will converge to exactly when the sequence converges to zero. It turns out that this form of the remainder is often easier to handle than the original and we can use it to obtain some general results.     Taylor's series    series Taylor's series If there exists a real number such that for all nonnegative integers and for all on an interval containing and , then and so     In order to prove this, it might help to first prove the following.    If and are integrable functions and , then        Triangle Inequalities for Integrals Prove Lemma .     .        series Taylor's series  Taylor series converges  Prove Theorem .    You might want to use Problem of Chapter . Also there are two cases to consider: and (the case is trivial). You will find that this is true in general. This is why we will often indicate that is between and as in the theorem. In the case , notice that       Use Theorem to prove that for any real number                     Problem shows that the Taylor series of expanded at zero converges to for any real number . Theorem can be used in a similar fashion to show that for any real numbers and .  Recall that Chapter we showed that if we define the function by the power series then . This, of course, is just the familiar addition property of integer exponents extended to any real number. In Chapter we had to assume that defining as a series was meaningful because we did not address the convergence of the series in that chapter. Now that we know the series converges for any real number we see that the definition is in fact valid.  Assuming that we can differentiate this series term-by-term it is straightforward to show that .   We can, but that proof will have to wait for a few more chapters.   Along with Taylor's formula this can then be used to show that more elegantly than the rather cumbersome proof in equation , as the following problem shows.     Recall that if then . Use this along with the Taylor series expansion of about to show that      Theorem is a nice first step toward a rigorous theory of the convergence of Taylor series, but it is not applicable in all cases. For example, consider the function . As we saw in Chapter , Problem , this function's Maclaurin series (the binomial series for appears to be converging to the function for . While this is, in fact, true, the above proposition does not apply. If we consider the derivatives of , we obtain: .  Notice that .  Since this sequence grows without bound as , then there is no chance for us to find a number to act as a bound for all of the derviatives of on any interval containing 0 and  , and so the hypothesis of Theorem will never be satisfied. We need a more delicate argument to prove that is valid for . To accomplish this task, we will need to express the remainder of the Taylor series differently. Fortunately, there are at least two such alternate forms.  "
},
{
  "id": "p-642",
  "level": "2",
  "url": "TaylorSeries-IntFormRem.html#p-642",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "remainder (of the Taylor series) "
},
{
  "id": "thm_TaylorSeries",
  "level": "2",
  "url": "TaylorSeries-IntFormRem.html#thm_TaylorSeries",
  "type": "Theorem",
  "number": "8.1.1",
  "title": "",
  "body": "   Taylor's series    series Taylor's series If there exists a real number such that for all nonnegative integers and for all on an interval containing and , then and so    "
},
{
  "id": "lemma_TriangleForIntegral",
  "level": "2",
  "url": "TaylorSeries-IntFormRem.html#lemma_TriangleForIntegral",
  "type": "Lemma",
  "number": "8.1.2",
  "title": "",
  "body": "  If and are integrable functions and , then    "
},
{
  "id": "problem-89",
  "level": "2",
  "url": "TaylorSeries-IntFormRem.html#problem-89",
  "type": "Problem",
  "number": "8.1.3",
  "title": "",
  "body": "   Triangle Inequalities for Integrals Prove Lemma .     .   "
},
{
  "id": "problem-90",
  "level": "2",
  "url": "TaylorSeries-IntFormRem.html#problem-90",
  "type": "Problem",
  "number": "8.1.4",
  "title": "",
  "body": "    series Taylor's series  Taylor series converges  Prove Theorem .    You might want to use Problem of Chapter . Also there are two cases to consider: and (the case is trivial). You will find that this is true in general. This is why we will often indicate that is between and as in the theorem. In the case , notice that    "
},
{
  "id": "prob_Taylor_Series-using",
  "level": "2",
  "url": "TaylorSeries-IntFormRem.html#prob_Taylor_Series-using",
  "type": "Problem",
  "number": "8.1.5",
  "title": "",
  "body": "  Use Theorem to prove that for any real number                   "
},
{
  "id": "problem-92",
  "level": "2",
  "url": "TaylorSeries-IntFormRem.html#problem-92",
  "type": "Problem",
  "number": "8.1.6",
  "title": "",
  "body": "   Recall that if then . Use this along with the Taylor series expansion of about to show that    "
},
{
  "id": "TaylorSeries-LagrFormRem",
  "level": "1",
  "url": "TaylorSeries-LagrFormRem.html",
  "type": "Section",
  "number": "8.2",
  "title": "Lagrange’s Form of the Remainder",
  "body": " Lagrange's Form of the Remainder  Joseph-Louis Lagrange Lagrange, Joseph-Louis provided an alternate form for the remainder in Taylor series in his 1797 work Théorie des functions analytiques. Lagrange's form of the remainder is as follows.     Lagrange's Form of the Remainder    Lagrange's form of the remainder Suppose is a function such that is continuous on an interval containing and . Then where is some number between and .     Note first that the result is true when as both sides reduce to 0 (in that case .) We will prove the case where ; the case will be an exercise.  First, we already have so it suffices to show that for some with . To this end, let and .  Note that for all , we have . Since , this gives us and so .  Computing the outside integrals, we have   .  Since is a value that lies between the maximum and minimum of on , then by the Intermediate Value Theorem, there must exist a number with .  This gives us .  And the result follows.      Lagrange's form of the remainder Prove Theorem for the case where .    Note that .  Use the same argument on this integral. It will work out in the end. Really! You just need to keep track of all of the negatives.    This is not Lagrange's proof. He did not use the integral form of the remainder. However, this is similar to Lagrange's proof in that he also used the Intermediate Value Theorem (IVT) Intermediate Value Theorem (IVT) and Extreme Value Theorem (EVT) Extreme Value Theorem (EVT) much as we did. In Lagrange's day, these were taken to be obviously true for a continuous function and we have followed Lagrange's Lagrange, Joseph-Louis lead by assuming the IVT and the EVT. However, in mathematics we need to keep our assumptions few and simple. The IVT and the EVT do not satisfy this need in the sense that both can be proved from simpler ideas. We will return to this in Chapter .  Also, a word of caution about this: Lagrange's form of the remainder is  , where is some number between and . The proof does not indicate what this might be and, in fact, this changes as changes. All we know is that this lies between and . To illustrate this issue and its potential dangers, consider the following problem where we have a chance to compute the value of for the function .   series Geometric series as a Taylor series  series Geometric series   This problem investigates the Taylor series representation .    Use the fact that to compute the remainder . Specifically, compute this remainder when and conclude that the Taylor series does not converge to when .    Compare the remainder in part a with the Lagrange form of the remainder to determine what is when .    Consider the following argument: If , then so the Lagrange form of the remainder when is given by where . It can be seen in part b that . Thus and so by Problem of Chapter , the Lagrange remainder converges to as . This argument would suggest that the Taylor series converges to for . However, we know from part (a) that this is incorrect. What is wrong with the argument?    Even though there are potential dangers in misusing the Lagrange form of the remainder, it is a useful form. For example, armed with the Lagrange form of the remainder, we can prove the following theorem.   series Binomial Series, the  Binomial Series, the converges on the interval   The binomial series converges to for .     First note that the binomial series is, in fact, the Taylor series for the function expanded about . If we let be a fixed number with , then it suffices to show that the Lagrange form of the remainder converges to . With this in mind, notice that and so the Lagrange form of the remainder is where is some number between and . Since and , then we have , and so .  Since , then by the Squeeze Theorem, .  Thus the Taylor series converges to for .   Unfortunately, this proof will not work for . In this case, the fact that makes . Thus and so the inequality may not hold.     series Binomial Series, the Binomial Series is a Taylor series Show that if , then and modify the above proof to show that the binomial series converges to for .    To take care of the case where , we will use yet another form of the remainder for Taylor series. However before we tackle that, we will use the Lagrange form of the remainder to address something mentioned in Chapter . Recall that we noticed that the series representation did not work when , however we noticed that the series obtained by integrating term by term did seem to converge to the antiderivative of . Specifically, we have the Taylor series .  Substituting into this provided the convergent series . We made the claim that this, in fact, converges to , but that this was not obvious. The Lagrange form of the remainder gives us the machinery to prove this.   Lagrange's form of the remainder    Compute the Lagrange form of the remainder for the Maclaurin series for .    Show that when , the Lagrange form of the remainder converges to and so the equation is actually correct.    "
},
{
  "id": "thm_LagrangeRemainder",
  "level": "2",
  "url": "TaylorSeries-LagrFormRem.html#thm_LagrangeRemainder",
  "type": "Theorem",
  "number": "8.2.1",
  "title": "",
  "body": "   Lagrange's Form of the Remainder    Lagrange's form of the remainder Suppose is a function such that is continuous on an interval containing and . Then where is some number between and .   "
},
{
  "id": "proof-9",
  "level": "2",
  "url": "TaylorSeries-LagrFormRem.html#proof-9",
  "type": "Proof",
  "number": "8.2.1",
  "title": "",
  "body": " Note first that the result is true when as both sides reduce to 0 (in that case .) We will prove the case where ; the case will be an exercise.  First, we already have so it suffices to show that for some with . To this end, let and .  Note that for all , we have . Since , this gives us and so .  Computing the outside integrals, we have   .  Since is a value that lies between the maximum and minimum of on , then by the Intermediate Value Theorem, there must exist a number with .  This gives us .  And the result follows.  "
},
{
  "id": "problem-93",
  "level": "2",
  "url": "TaylorSeries-LagrFormRem.html#problem-93",
  "type": "Problem",
  "number": "8.2.2",
  "title": "",
  "body": "   Lagrange's form of the remainder Prove Theorem for the case where .    Note that .  Use the same argument on this integral. It will work out in the end. Really! You just need to keep track of all of the negatives.   "
},
{
  "id": "problem-94",
  "level": "2",
  "url": "TaylorSeries-LagrFormRem.html#problem-94",
  "type": "Problem",
  "number": "8.2.3",
  "title": "",
  "body": " series Geometric series as a Taylor series  series Geometric series   This problem investigates the Taylor series representation .    Use the fact that to compute the remainder . Specifically, compute this remainder when and conclude that the Taylor series does not converge to when .    Compare the remainder in part a with the Lagrange form of the remainder to determine what is when .    Consider the following argument: If , then so the Lagrange form of the remainder when is given by where . It can be seen in part b that . Thus and so by Problem of Chapter , the Lagrange remainder converges to as . This argument would suggest that the Taylor series converges to for . However, we know from part (a) that this is incorrect. What is wrong with the argument?   "
},
{
  "id": "thm_BinomialSeriesConverges",
  "level": "2",
  "url": "TaylorSeries-LagrFormRem.html#thm_BinomialSeriesConverges",
  "type": "Theorem",
  "number": "8.2.4",
  "title": "",
  "body": " series Binomial Series, the  Binomial Series, the converges on the interval   The binomial series converges to for .   "
},
{
  "id": "proof-10",
  "level": "2",
  "url": "TaylorSeries-LagrFormRem.html#proof-10",
  "type": "Proof",
  "number": "8.2.2",
  "title": "",
  "body": " First note that the binomial series is, in fact, the Taylor series for the function expanded about . If we let be a fixed number with , then it suffices to show that the Lagrange form of the remainder converges to . With this in mind, notice that and so the Lagrange form of the remainder is where is some number between and . Since and , then we have , and so .  Since , then by the Squeeze Theorem, .  Thus the Taylor series converges to for .  "
},
{
  "id": "prob_Taylor_Series-Binomial_Series_and",
  "level": "2",
  "url": "TaylorSeries-LagrFormRem.html#prob_Taylor_Series-Binomial_Series_and",
  "type": "Problem",
  "number": "8.2.5",
  "title": "",
  "body": "   series Binomial Series, the Binomial Series is a Taylor series Show that if , then and modify the above proof to show that the binomial series converges to for .   "
},
{
  "id": "problem-96",
  "level": "2",
  "url": "TaylorSeries-LagrFormRem.html#problem-96",
  "type": "Problem",
  "number": "8.2.6",
  "title": "",
  "body": " Lagrange's form of the remainder    Compute the Lagrange form of the remainder for the Maclaurin series for .    Show that when , the Lagrange form of the remainder converges to and so the equation is actually correct.   "
},
{
  "id": "TaylorSeries-CauchyFormRem",
  "level": "1",
  "url": "TaylorSeries-CauchyFormRem.html",
  "type": "Section",
  "number": "8.3",
  "title": "Cauchy’s Form of the Remainder",
  "body": " Cauchy's Form of the Remainder  In his 1823 work, Résumée des leçons données á l'ecole royale polytechnique sur le calcul infintésimal, Augustin Cauchy Cauchy, Augustin provided another form of the remainder for Taylor series.     Cauchy's Form of the Remainder    sequences Cauchy sequences Cauchy's remainder Suppose is a function such that is continuous on an interval containing and . Then where is some number between and .       series Taylor's series Cauchy Remainder Prove Theorem using an argument similar to the one used in the proof of Theorem . Don't forget there are two cases to consider.    Using Cauchy's form of the remainder, we can prove that the binomial series converges to for    Strictly speaking we only need to show this for In problem we covered .   With this in mind, let be a fixed number with and consider that the binomial series is the Maclaurin series for the function . As we saw before, , so the Cauchy form of the remainder is given by where is some number with . Thus we have .  Notice that if , then . Thus and . Thus we have .     Binomial Series, the is increasing  is increasing on Suppose and consider the function . Show that on , is increasing and use this to conclude that for , .  Use this fact to finish the proof that the binomial series converges to for .    The proofs of both the Lagrange form and the Cauchy form of the remainder for Taylor series made use of two crucial facts about continuous functions. First, we assumed the Extreme Value Theorem: Any continuous function on a closed   Augustin Cauchy  Cauchy, Augustin portrait of    bounded interval assumes its maximum and minimum somewhere on the interval. Second, we assumed that any continuous function satisfied the Intermediate Value Theorem: If a continuous function takes on two different values, then it must take on any value between those two values.  Mathematicians in the late s and early s typically considered these facts to be intuitively obvious. This was natural since our understanding of continuity at that time was, solely, intuitive. Intuition is a useful tool, but as we have seen before it is also unreliable. For example consider the following function. .  Is this function continuous at 0? Near zero its graph looks like this:      Formula near .    but this graph must be taken with a grain of salt as oscillates infinitely often as nears zero.  No matter what your guess may be, it is clear that it is hard to analyze such a function armed with only an intuitive notion of continuity. We will revisit this example in the next chapter.  As with convergence, continuity is more subtle than it first appears.  We put convergence on solid ground by providing a completely analytic definition in the previous chapter. What we need to do in the next chapter is provide a completely rigorous definition for continuity.  "
},
{
  "id": "thm_CauchyRemainder",
  "level": "2",
  "url": "TaylorSeries-CauchyFormRem.html#thm_CauchyRemainder",
  "type": "Theorem",
  "number": "8.3.1",
  "title": "",
  "body": "   Cauchy's Form of the Remainder    sequences Cauchy sequences Cauchy's remainder Suppose is a function such that is continuous on an interval containing and . Then where is some number between and .   "
},
{
  "id": "problem-97",
  "level": "2",
  "url": "TaylorSeries-CauchyFormRem.html#problem-97",
  "type": "Problem",
  "number": "8.3.2",
  "title": "",
  "body": "   series Taylor's series Cauchy Remainder Prove Theorem using an argument similar to the one used in the proof of Theorem . Don't forget there are two cases to consider.   "
},
{
  "id": "problem-98",
  "level": "2",
  "url": "TaylorSeries-CauchyFormRem.html#problem-98",
  "type": "Problem",
  "number": "8.3.3",
  "title": "",
  "body": "   Binomial Series, the is increasing  is increasing on Suppose and consider the function . Show that on , is increasing and use this to conclude that for , .  Use this fact to finish the proof that the binomial series converges to for .   "
},
{
  "id": "figure-30",
  "level": "2",
  "url": "TaylorSeries-CauchyFormRem.html#figure-30",
  "type": "Figure",
  "number": "8.3.4",
  "title": "",
  "body": " Augustin Cauchy  Cauchy, Augustin portrait of   "
},
{
  "id": "figure-31",
  "level": "2",
  "url": "TaylorSeries-CauchyFormRem.html#figure-31",
  "type": "Figure",
  "number": "8.3.5",
  "title": "",
  "body": "    Formula near .   "
},
{
  "id": "TaylorSeries-AddProb",
  "level": "1",
  "url": "TaylorSeries-AddProb.html",
  "type": "Section",
  "number": "8.4",
  "title": "Additional Problems",
  "body": " Additional Problems   series Taylor's series drill problems   Find the Integral form, Lagrange form, and Cauchy form of the remainder for Taylor series for the following functions expanded about the given values of .     ,      ,      ,      ,               "
},
{
  "id": "problem-99",
  "level": "2",
  "url": "TaylorSeries-AddProb.html#problem-99",
  "type": "Problem",
  "number": "8.4.1",
  "title": "",
  "body": " series Taylor's series drill problems   Find the Integral form, Lagrange form, and Cauchy form of the remainder for Taylor series for the following functions expanded about the given values of .     ,      ,      ,      ,              "
},
{
  "id": "Continuity-AnalyticDef",
  "level": "1",
  "url": "Continuity-AnalyticDef.html",
  "type": "Section",
  "number": "9.1",
  "title": "An Analytic Definition of Continuity",
  "body": " An Analytic Definition of Continuity  Before the invention of calculus, the notion of continuity was treated intuitively if it was treated at all. At first pass, it seems a very simple idea based solidly in our experience of the real world. Standing on the bank we see a river flow past us continuously, not by tiny jerks. Even when the flow might seem at first to be discontinuous, as when it drops precipitously over a cliff, a closer examination shows that it really is not. As the water approaches the cliff it speeds up. When it finally goes over it accelerates very quickly but no matter how fast it goes it moves continuously, moving from here to there by occupying every point in between. This is continuous motion. It never disappears over there and instantaneously reappears over here. That would be discontinuous motion.  Similarly, a thrown stone flies continuously (and smoothly) from release point to landing point, passing through each point in its path.  But wait.  If the stone passes through discrete points it must be doing so by teeny tiny little jerks, mustn't it? Otherwise how would it get from one point to the next? Is it possible that motion in the real world, much like motion in a movie, is really composed of tiny jerks from one point to the next but that these tiny jerks are simply too small and too fast for our senses to detect?  If so, then the real world is more like the rational number line ( ) from Chapter than the real number line ( ). In that case, motion really consists of jumping discretely over the missing points (like ) as we move from here to there. That may seem like a bizarre idea to you it does to us as well but the idea of continuous motion is equally bizarre. It's just a little harder to see why.  The real world will be what it is regardless of what we believe it to be, but fortunately in mathematics we are not constrained to live in it. So we won't even try. We will simply postulate that no such jerkiness exists; that all motion is continuous.  However we are constrained to live with the logical consequences of our assumptions, once they are made. These will lead us into some very deep waters indeed.  The intuitive treatment of continuity was maintained throughout the 1700's as it was not generally perceived that a truly rigorous definition was necessary. Consider the following definition given by Euler in 1748.   A continuous curve is one such that its nature can be expressed by a single function of If a curve is of such a nature that for its various parts . . . different functions of are required for its expression, . . . , then we call such a curve discontinuous.   However, the complexities associated with Fourier series and the types of functions that they represented caused mathematicians in the early s to rethink their notions of continuity. As we saw in Part , the graph of the function defined by the Fourier series looked like this:         This function went against Euler's notion of what a continuous function should be. Here, an infinite sum of continuous cosine curves provided a single expression which resulted in a discontinuous curve. But as we've seen this didn't happen with power series and an intuitive notion of continuity is inadequate to explain the difference. Even more perplexing is the following situation. Intuitively, one would think that a continuous curve should have a tangent line at at least one point. It may have a number of jagged points to it, but it should be smooth somewhere. An example of this would be . Its graph is given by         This function is not differentiable at the origin but it is differentiable everywhere else. One could certainly come up with examples of functions which fail to be differentiable at any number of points but, intuitively, it would be reasonable    Karl Weierstrass  Weierstrass, Karl portrait of    to expect that a continuous function should be differentiable somewhere . We might conjecture the following:    If is continuous on an interval then there is some , such that exists.    Surprisingly, in , Karl Weierstrass Weierstrass, Karl showed that the above conjecture is FALSE . He did this by displaying the counterexample: .  Weierstrass showed that if is an odd integer, , and , then is continuous everywhere, but is nowhere differentiable. Such a function is somewhat fractal in nature, and it is clear that a definition of continuity relying on intuition is inadequate to study it.   Weierstrass, Karl continuous, everywhere non-differentiable function  continuity Weierstrass's continuous, but non-differentiable function   Given , what is the smallest value of for which satisfies Weierstrass' criterion to be continuous and nowhere differentiable.    Let and use a computer algebra system to plot for and .    Plot for , where . Based upon what you see in parts b and c, why would we describe the function to be somewhat fractal in nature?    Just as it was important to define convergence with a rigorous definition without appealing to intuition or geometric representations, it is imperative that we define continuity in a rigorous fashion not relying on graphs.  The first appearance of a definition of continuity which did not rely on geometry or intuition was given in 1817 by Bernhard Bolzano Bolzano, Bernhard in a paper published in the Proceedings of the Prague Scientific Society entitled Rein analytischer Beweis des Lehrsatzes dass zwieschen je zwey Werthen, die ein entgegengesetztes Resultat gewaehren, wenigstens eine reele Wurzel der Gleichung liege (Purely Analytic Proof of the Theorem that Between Any Two Values that Yield Results of Opposite Sign There Will be at Least One Real Root of the Equation).   Bernhard Bolzano  Bolzano, Bernhard portrait of    From the title it should be clear that in this paper Bolzano is proving the Intermediate Value Theorem. To do this he needs a completely analytic definition of continuity. The substance of Bolzano's idea is that if is continuous at a point then should be close to  whenever is close enough to  . More precisely, Bolzano said that is continuous at provided can be made smaller than any given quantity provided we make sufficiently small.  The language Bolzano uses is very similar to the language Leibniz Leibniz, Gottfried Wilhelm used when he postulated the existence of infinitesimally small numbers. Leibniz said that infinitesimals are smaller than any given quantity but not zero. Bolzano says that can be made smaller than any given quantity provided we make sufficiently small. But Bolzano stops short of saying that is infinitesimally small. Given , we can choose so that is smaller than any real number we could name, say , provided we name  first , but for any given choice of , , and are both still real numbers. Possibly very small real numbers to be sure, but real numbers nonetheless. Infinitesimals have no place in Bolzano's construction.   Bolzano, Bernhard Bolzano's paper was not well known when Cauchy Cauchy, Augustin proposed a similar definition in his Cours d'analyse of 1821 so it is usually Cauchy who is credited with this definition, but even Cauchy's definition is not quite tight enough for modern standards. It was Karl Weierstrass in 1859 who finally gave the modern definition.     continuity definition of  continuity We say that a function is continuous at provided that for any , there exists a such that if then .    Notice that the definition of continuity of a function is done point-by-point. A function can certainly be continuous at some points while discontinuous at others. When we say that is continuous on an interval, then we mean that it is continuous at every point of that interval and, in theory, we would need to use the above definition to check continuity at each individual point.   Extreme Value Theorem (EVT) continuity and  continuity Extreme Value Theorem (EVT) and  Intermediate Value Theorem (IVT) continuity and  continuity Intermediate Value Theorem and Our definition fits the bill in that it does not rely on either intuition or graphs, but it is this very non-intuitiveness that makes it hard to grasp. It usually takes some time to become comfortable with this definition, let alone use it to prove theorems such as the Extreme Value Theorem and Intermediate Value Theorem. So let's go slowly to develop a feel for it.  This definition spells out a completely black and white procedure: you give me a positive number , and I must be able to find a positive number which satisfies a certain property. If I can always do that then the function is continuous at the point of interest.  This definition also makes very precise what we mean when we say that should be close to  whenever is close enough to  . For example, intuitively we know that should be continuous at . This means that we should be able to get to within, say, of provided we make close enough to . Specifically, we want . This happens exactly when . Using the fact that and , then we can see that if we get to within of , then and so will be within . of . This is very straightforward. What makes this situation more difficult is that we must be able to do this for any .  Notice the similarity between this definition and the definition of convergence of a sequence. Both definitions have the challenge of an . In the definition of , we had to get to within of by making large enough. For sequences, the challenge lies in making sufficiently small. More precisely, given we need to decide how large should be to guarantee that .  In our definition of continuity, we still need to make something small (namely ), only this time, we need to determine how close must be to to ensure this will happen instead of determining how large must be.  What makes continuous at is the arbitrary nature of (as long as it is positive). As becomes smaller, this forces to be closer to . That we can always find a positive distance to work is what we mean when we say that we can make as close to as we wish, provided we get close enough to . The sequence of pictures below illustrates that the phrase for any , there exists a such that if then can be replaced by the equivalent formulation for any , there exists a such that if then . This could also be replaced by the phrase for any , there exists a such that if then . All of these equivalent formulations convey the idea that we can get to within of , provided we make within of , and we will use whichever formulation suits our needs in a particular application.            The precision of the definition is what allows us to examine continuity without relying on pictures or vague notions such as nearness or getting closer to. We will now consider some examples to illustrate this precision.    Use the definition of continuity to show that is continuous at any point .    If we were to draw the graph of this line, then you would likely say that this is obvious. The point behind the definition is that we can back up your intuition in a rigorous manner.   Let . Let . If , then   Thus by the definition, is continuous at .      continuity is continuous everywhere Use the definition of continuity to show that if and are fixed (but unspecified) real numbers then the function is continuous at every real number .      Use the definition of continuity to show that is continuous at .     Let . Let . If , then . Thus .  Thus by the definition, is continuous at .   Notice that in these proofs, the challenge of an was first given. This is because the choice of must depend upon . Also notice that there was no explanation for our choice of . We just supplied it and showed that it worked. As long as , then this is all that is required. In point of fact, the we chose in each example was not the only choice that worked; any smaller would work as well.   continuity smaller , bigger  continuity smaller works in definition  continuity larger works in definition   Given a particular in the definition of continuity, show that if a particular satisfies the definition, then any with will also work for this .    Show that if a can be found to satisfy the conditions of the definition of continuity for a particular , then this will also work for any with .    It wasn't explicitly stated in the definition but when we say if then , we should be restricting ourselves to values which are in the domain of the function , otherwise doesn't make sense. We didn't put it in the definition because that definition was complicated enough without this technicality. Also in the above examples, the functions were defined everywhere so this was a moot point. We will continue with the convention that when we say if then , we will be restricting ourselves to values which are in the domain of the function . This will allow us to examine continuity of functions not defined for all without restating this restriction each time.     continuity is continuous at zero Use the definition of continuity to show that is continuous at .       is continuous at zero Use the definition of continuity to show that is continuous at . How is this problem different from problem ? How is it similar?    Sometimes the that will work for a particular is fairly obvious to see, especially after you've gained some experience. This is the case in the above examples (at least after looking back at the proofs). However, the task of finding a to work is usually not so obvious and requires some scrapwork. This scrapwork is vital toward producing a , but again is not part of the polished proof. This can be seen in the following example.    Use the definition of continuity to prove that is continuous at .   SCRAPWORK   As before, the scrapwork for these problems often consists of simply working backwards. Specifically, given an , we need to find a so that , whenever . We work backwards from what we want, keeping an eye on the fact that we can control the size of . .  This seems to suggest that we should make . We're now ready for the formal proof.     Let . Let . If , then , and so .  Thus by definition, is continuous at .    Paul Halmos  Halmos, Paul portrait of    Bear in mind that someone reading the formal proof will not have seen the scrapwork, so the choice of might seem rather mysterious. However, you are in no way bound to motivate this choice of and usually you should not, unless it is necessary for the formal proof. All you have to do is find this and show that it works. Furthermore, to a trained reader, your ideas will come through when you demonstrate that your choice of works.  Now reverse this last statement. As a trained reader, when you read the proof of a theorem it is your responsibility to find the scrapwork, to see how the proof works and understand it fully. As the renowned mathematical expositor Paul Halmos Halmos, Paul (1916-2006) said, Don't just read it; fight it! Ask your own questions, look for your own examples, discover your own proofs. Is the hypothesis necessary? Is the converse true? What happens in the classical special case? What about the degenerate cases? Where does the proof use the hypothesis?   This is the way to learn mathematics. It is really the only way.   is continuous at every positive real number   Use the definition of continuity to show that is continuous at any positive real number .     is continuous for   Use a unit circle to show that for , and and conclude and for  .    Use the definition of continuity to prove that is continuous at any point .    .     continuity is continuous everywhere  continuous functions is continuous everywhere   Use the definition of continuity to show that is continuous at .    Show that is continuous at any point .   Rewrite as and use what you proved in part a.    In the above problems, we used the definition of continuity to verify our intuition about the continuity of familiar functions. The advantage of this analytic definition is that it can be applied when the function is not so intuitive. Consider, for example, the function given at the end of the last chapter. .  Near zero, the graph of looks like this:   As we mentioned in the previous chapter, since sin oscillates infinitely often as nears zero this graph must be viewed with a certain amount of suspicion. However our completely analytic definition of continuity shows that this function is, in fact, continuous at 0.  The Topologist's Sine Function    Topologist's sine function is continuous at zero Use the definition of continuity to show that is continuous at .    Even more perplexing is the function defined by         To the naked eye, the graph of this function looks like the lines and . Of course, such a graph would not be the graph of a function. Actually, both of these lines have holes in them. Wherever there is a point on one line there is a hole on the other. Each of these holes is the width of a single point (that is, their width is zero!) so they are invisible to the naked eye (or even magnified under the most powerful microscope available). This idea is illustrated in the following graph   Can such a function so full of holes actually be continuous anywhere? It turns out that we can use our definition to show that this function is, in fact, continuous at and at no other point.   continuity of   Use the definition of continuity to show that the function is continuous at .    Let . Use the definition of continuity to show that is not continuous at .   You might want to break this up into two cases where is rational or irrational. Show that no choice of will work for . Note that Theorem of Chapter will probably help here.    "
},
{
  "id": "figure-32",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#figure-32",
  "type": "Figure",
  "number": "9.1.1",
  "title": "",
  "body": "      "
},
{
  "id": "figure-33",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#figure-33",
  "type": "Figure",
  "number": "9.1.2",
  "title": "",
  "body": "      "
},
{
  "id": "figure-34",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#figure-34",
  "type": "Figure",
  "number": "9.1.3",
  "title": "",
  "body": "  Karl Weierstrass  Weierstrass, Karl portrait of   "
},
{
  "id": "conj_ContImplyDiff",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#conj_ContImplyDiff",
  "type": "Conjecture",
  "number": "9.1.4",
  "title": "",
  "body": "  If is continuous on an interval then there is some , such that exists.   "
},
{
  "id": "problem-100",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-100",
  "type": "Problem",
  "number": "9.1.5",
  "title": "",
  "body": " Weierstrass, Karl continuous, everywhere non-differentiable function  continuity Weierstrass's continuous, but non-differentiable function   Given , what is the smallest value of for which satisfies Weierstrass' criterion to be continuous and nowhere differentiable.    Let and use a computer algebra system to plot for and .    Plot for , where . Based upon what you see in parts b and c, why would we describe the function to be somewhat fractal in nature?   "
},
{
  "id": "figure-35",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#figure-35",
  "type": "Figure",
  "number": "9.1.6",
  "title": "",
  "body": " Bernhard Bolzano  Bolzano, Bernhard portrait of   "
},
{
  "id": "def_continuity",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#def_continuity",
  "type": "Definition",
  "number": "9.1.7",
  "title": "",
  "body": "   continuity definition of  continuity We say that a function is continuous at provided that for any , there exists a such that if then .   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#example-9",
  "type": "Example",
  "number": "9.1.8",
  "title": "",
  "body": "  Use the definition of continuity to show that is continuous at any point .   "
},
{
  "id": "proof-11",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#proof-11",
  "type": "Proof",
  "number": "9.1.1",
  "title": "",
  "body": " Let . Let . If , then   Thus by the definition, is continuous at .  "
},
{
  "id": "problem-101",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-101",
  "type": "Problem",
  "number": "9.1.9",
  "title": "",
  "body": "   continuity is continuous everywhere Use the definition of continuity to show that if and are fixed (but unspecified) real numbers then the function is continuous at every real number .   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#example-10",
  "type": "Example",
  "number": "9.1.10",
  "title": "",
  "body": "  Use the definition of continuity to show that is continuous at .   "
},
{
  "id": "proof-12",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#proof-12",
  "type": "Proof",
  "number": "9.1.2",
  "title": "",
  "body": " Let . Let . If , then . Thus .  Thus by the definition, is continuous at .  "
},
{
  "id": "problem-102",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-102",
  "type": "Problem",
  "number": "9.1.11",
  "title": "",
  "body": " continuity smaller , bigger  continuity smaller works in definition  continuity larger works in definition   Given a particular in the definition of continuity, show that if a particular satisfies the definition, then any with will also work for this .    Show that if a can be found to satisfy the conditions of the definition of continuity for a particular , then this will also work for any with .   "
},
{
  "id": "prob_extended_sqrt_is_continuous_at_zero",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#prob_extended_sqrt_is_continuous_at_zero",
  "type": "Problem",
  "number": "9.1.12",
  "title": "",
  "body": "   continuity is continuous at zero Use the definition of continuity to show that is continuous at .   "
},
{
  "id": "problem-104",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-104",
  "type": "Problem",
  "number": "9.1.13",
  "title": "",
  "body": "   is continuous at zero Use the definition of continuity to show that is continuous at . How is this problem different from problem ? How is it similar?   "
},
{
  "id": "example_SqrtContinuous",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#example_SqrtContinuous",
  "type": "Example",
  "number": "9.1.14",
  "title": "",
  "body": "  Use the definition of continuity to prove that is continuous at .   SCRAPWORK   As before, the scrapwork for these problems often consists of simply working backwards. Specifically, given an , we need to find a so that , whenever . We work backwards from what we want, keeping an eye on the fact that we can control the size of . .  This seems to suggest that we should make . We're now ready for the formal proof.   "
},
{
  "id": "proof-13",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#proof-13",
  "type": "Proof",
  "number": "9.1.3",
  "title": "",
  "body": " Let . Let . If , then , and so .  Thus by definition, is continuous at .  "
},
{
  "id": "figure-36",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#figure-36",
  "type": "Figure",
  "number": "9.1.15",
  "title": "",
  "body": " Paul Halmos  Halmos, Paul portrait of   "
},
{
  "id": "problem-105",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-105",
  "type": "Problem",
  "number": "9.1.16",
  "title": "",
  "body": " is continuous at every positive real number   Use the definition of continuity to show that is continuous at any positive real number .   "
},
{
  "id": "problem-106",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-106",
  "type": "Problem",
  "number": "9.1.17",
  "title": "",
  "body": " is continuous for   Use a unit circle to show that for , and and conclude and for  .    Use the definition of continuity to prove that is continuous at any point .    .   "
},
{
  "id": "problem-107",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-107",
  "type": "Problem",
  "number": "9.1.18",
  "title": "",
  "body": " continuity is continuous everywhere  continuous functions is continuous everywhere   Use the definition of continuity to show that is continuous at .    Show that is continuous at any point .   Rewrite as and use what you proved in part a.   "
},
{
  "id": "problem-108",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-108",
  "type": "Problem",
  "number": "9.1.19",
  "title": "The Topologist’s Sine Function.",
  "body": "The Topologist's Sine Function    Topologist's sine function is continuous at zero Use the definition of continuity to show that is continuous at .   "
},
{
  "id": "problem-109",
  "level": "2",
  "url": "Continuity-AnalyticDef.html#problem-109",
  "type": "Problem",
  "number": "9.1.20",
  "title": "",
  "body": " continuity of   Use the definition of continuity to show that the function is continuous at .    Let . Use the definition of continuity to show that is not continuous at .   You might want to break this up into two cases where is rational or irrational. Show that no choice of will work for . Note that Theorem of Chapter will probably help here.   "
},
{
  "id": "SequencesAndContinuity",
  "level": "1",
  "url": "SequencesAndContinuity.html",
  "type": "Section",
  "number": "9.2",
  "title": "Sequences and Continuity",
  "body": " Sequences and Continuity  There is an alternative way to prove that the function is not continuous at . We will examine this by looking at the relationship between our definitions of convergence and continuity. The two ideas are actually quite closely connected, as illustrated by the following very useful theorem.     continuity via limits The function is continuous at if and only if satisfies the following property:      Theorem says that in order for to be continuous, it is necessary and sufficient that any sequence converging to must force the sequence to converge to . A picture of this situation is below though, as always, the formal proof will not rely on the diagram.   This theorem is especially useful for showing that a function is not continuous at a point ; all we need to do is exhibit a sequence converging to such that the sequence does not converge to . Let's demonstrate this idea before we tackle the proof of Theorem .    Use Theorem to prove that is not continuous at .     First notice that can be written as .  To show that is not continuous at , all we need to do is create a single sequence which converges to , but for which the sequence does not converge to . For a function like this one, just about any sequence will do, but let's use , just because it is an old familiar friend.  We have , but . Thus by Theorem , is not continuous at .      continuity Heaviside's function is not continuous at zero Use Theorem to show that is not continuous at , no matter what value is.     continuity of   Use Theorem to show that is not continuous at .     Topologist's sine function modified version is not continuous at zero   The function is often called the topologist's sine curve. Whereas has roots at , and oscillates infinitely often as , has roots at , and oscillates infinitely often as approaches zero. A rendition of the graph follows.   Notice that is not even defined at . We can extend to be defined at 0 by simply choosing a value for  .  Use Theorem to show that is not continuous at , no matter what value is chosen for .     Sketch of the Proof of Theorem  We've seen how we can use Theorem , now we need to prove Theorem . The forward direction is fairly straightforward. So we assume that is continuous at and start with a sequence which converges to . What is left to show is that . If you write down the definitions of being continuous at , , and , you should be able to get from what you are assuming to what you want to conclude.  To prove the converse, it is convenient to prove its contrapositive. That is, we want to prove that if is not continuous at then we can construct a sequence that converges to but does not converge to . First we need to recognize what it means for to not be continuous at . This says that somewhere there exists an , such that no choice of will work for this. That is, for any such , there will exist , such that , but . With this in mind, if , then there will exist an such that , but . Similarly, if , then there will exist an such that , but . If we continue in this fashion, we will create a sequence such that , but . This should do the trick.      continuity via limits  limit implies is continuous Turn the ideas of the previous two paragraphs into a formal proof of Theorem .     Theorem is a very useful result. It is a bridge between the ideas of convergence and continuity so it allows us to bring all of the theory we developed in Chapter to bear on continuity questions. For example consider the following.     continuous functions sum of continuous functions is continuous Suppose and are both continuous at . Then and are continuous at .     We could use the definition of continuity to prove Theorem , but Theorem makes our job much easier. For example, to show that is continuous, consider any sequence which converges to . Since is continuous at , then by Theorem , . Likewise, since is continuous at , then .  By Theorem of Chapter ,  . Thus by Theorem , is continuous at . The proof that is continuous at is similar.    continuous functions the product of continuous functions is continuous   Use Theorem to show that if and are continuous at , then is continuous at .    By employing Theorem a finite number of times, we can see that a finite sum of continuous functions is continuous. That is, if are all continuous at then is continuous at . But what about an infinite sum? Specifically, suppose are all continuous at . Consider the following argument.  Let . Since is continuous at , then there exists such that if , then . Let min . If , then  .  Thus by definition, is continuous at .  This argument seems to say that an infinite sum of continuous functions must be continuous (provided it converges). However we know that the Fourier series is a counterexample to this, as it is an infinite sum of continuous functions which does not converge to a continuous function. Something fundamental seems to have gone wrong here. Can you tell what it is?  This is a question we will spend considerable time addressing in Chapter (in particular, see problem ) so if you don't see the difficulty, don't worry; you will. In the meantime keep this problem tucked away in your consciousness. It is, as we said, fundamental.   Theorem will also handle quotients of continuous functions. There is however a small detail that needs to be addressed first. Obviously, when we consider the continuity of at , we need to assume that . However, may be zero at other values. How do we know that when we choose our sequence converging to that is not zero? This would mess up our idea of using the corresponding theorem for sequences ( Theorem from Chapter ). This can be handled with the following lemma.    If is continuous at and , then there exists such that for all .     continuous functions if is continuouse and then is bounded away from zero near a   Prove Lemma .    Consider the case where . Use the definition with . The picture is below; make it formal.   For the case , consider the function .    A consequence of this lemma is that if we start with a sequence converging to , then for sufficiently large, .   continuous functions the quotient of continuous functions is continuous   Use Theorem , to prove that if and are continuous at and , then is continuous at .     continuous functions the composition of continuous functions is continuous   Suppose is continuous at and is continuous at . Then is continuous at (Note that .)     continuous functions the composition of continuous functions is continuous   Prove Theorem     Using the definition of continuity.    Using Theorem .    The above theorems allow us to build continuous functions from other continuous functions. For example, knowing that and are continuous, we can conclude that any polynomial, is continuous as well. We also know that functions such as are continuous without having to rely on the definition.   continuity drill problems   Show that each of the following is a continuous function at every point in its domain.    Any polynomial.    Any rational function. (A rational function is defined to be a ratio of polynomials.)     .    The other trig functions: , , , and .     continuity is continuous everywhere   What allows us to conclude that is continuous at any point without referring back to the definition of continuity?     Theorem can also be used to study the convergence of sequences. For example, since is continuous at any point and , then . This also illustrates a certain way of thinking about continuous functions. They are the ones where we can commute the function and a limit of a sequence. Specifically, if is continuous at and , then .   continuity via sequences   Compute the following limits. Be sure to point out how continuity is involved.                   Having this rigorous formulation of continuity is necessary for proving the Extreme Value Theorem and the Mean Value Theorem. However there is one more piece of the puzzle to address before we can prove these theorems.  We will do this in the next chapter, but before we go on it is time to define a fundamental concept that was probably one of the first you learned in calculus: limits.  "
},
{
  "id": "thm_LimDefOfContinuity",
  "level": "2",
  "url": "SequencesAndContinuity.html#thm_LimDefOfContinuity",
  "type": "Theorem",
  "number": "9.2.1",
  "title": "",
  "body": "   continuity via limits The function is continuous at if and only if satisfies the following property:    "
},
{
  "id": "example_HeavisideNotContinuous",
  "level": "2",
  "url": "SequencesAndContinuity.html#example_HeavisideNotContinuous",
  "type": "Example",
  "number": "9.2.2",
  "title": "",
  "body": "  Use Theorem to prove that is not continuous at .   "
},
{
  "id": "proof-14",
  "level": "2",
  "url": "SequencesAndContinuity.html#proof-14",
  "type": "Proof",
  "number": "9.2.1",
  "title": "",
  "body": " First notice that can be written as .  To show that is not continuous at , all we need to do is create a single sequence which converges to , but for which the sequence does not converge to . For a function like this one, just about any sequence will do, but let's use , just because it is an old familiar friend.  We have , but . Thus by Theorem , is not continuous at .  "
},
{
  "id": "problem-110",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-110",
  "type": "Problem",
  "number": "9.2.3",
  "title": "",
  "body": "   continuity Heaviside's function is not continuous at zero Use Theorem to show that is not continuous at , no matter what value is.   "
},
{
  "id": "problem-111",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-111",
  "type": "Problem",
  "number": "9.2.4",
  "title": "",
  "body": " continuity of   Use Theorem to show that is not continuous at .   "
},
{
  "id": "problem-112",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-112",
  "type": "Problem",
  "number": "9.2.5",
  "title": "",
  "body": " Topologist's sine function modified version is not continuous at zero   The function is often called the topologist's sine curve. Whereas has roots at , and oscillates infinitely often as , has roots at , and oscillates infinitely often as approaches zero. A rendition of the graph follows.   Notice that is not even defined at . We can extend to be defined at 0 by simply choosing a value for  .  Use Theorem to show that is not continuous at , no matter what value is chosen for .   "
},
{
  "id": "proof-15",
  "level": "2",
  "url": "SequencesAndContinuity.html#proof-15",
  "type": "Proof",
  "number": "9.2.2",
  "title": "Sketch of the Proof of Theorem 9.2.1.",
  "body": " Sketch of the Proof of Theorem  We've seen how we can use Theorem , now we need to prove Theorem . The forward direction is fairly straightforward. So we assume that is continuous at and start with a sequence which converges to . What is left to show is that . If you write down the definitions of being continuous at , , and , you should be able to get from what you are assuming to what you want to conclude.  To prove the converse, it is convenient to prove its contrapositive. That is, we want to prove that if is not continuous at then we can construct a sequence that converges to but does not converge to . First we need to recognize what it means for to not be continuous at . This says that somewhere there exists an , such that no choice of will work for this. That is, for any such , there will exist , such that , but . With this in mind, if , then there will exist an such that , but . Similarly, if , then there will exist an such that , but . If we continue in this fashion, we will create a sequence such that , but . This should do the trick.  "
},
{
  "id": "problem-113",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-113",
  "type": "Problem",
  "number": "9.2.6",
  "title": "",
  "body": "   continuity via limits  limit implies is continuous Turn the ideas of the previous two paragraphs into a formal proof of Theorem .   "
},
{
  "id": "thm_ContSumProd",
  "level": "2",
  "url": "SequencesAndContinuity.html#thm_ContSumProd",
  "type": "Theorem",
  "number": "9.2.7",
  "title": "",
  "body": "   continuous functions sum of continuous functions is continuous Suppose and are both continuous at . Then and are continuous at .   "
},
{
  "id": "proof-16",
  "level": "2",
  "url": "SequencesAndContinuity.html#proof-16",
  "type": "Proof",
  "number": "9.2.3",
  "title": "",
  "body": " We could use the definition of continuity to prove Theorem , but Theorem makes our job much easier. For example, to show that is continuous, consider any sequence which converges to . Since is continuous at , then by Theorem , . Likewise, since is continuous at , then .  By Theorem of Chapter ,  . Thus by Theorem , is continuous at . The proof that is continuous at is similar.  "
},
{
  "id": "problem-114",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-114",
  "type": "Problem",
  "number": "9.2.8",
  "title": "",
  "body": " continuous functions the product of continuous functions is continuous   Use Theorem to show that if and are continuous at , then is continuous at .   "
},
{
  "id": "lem_BoundedAwayFromZero",
  "level": "2",
  "url": "SequencesAndContinuity.html#lem_BoundedAwayFromZero",
  "type": "Lemma",
  "number": "9.2.9",
  "title": "",
  "body": "  If is continuous at and , then there exists such that for all .   "
},
{
  "id": "problem-115",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-115",
  "type": "Problem",
  "number": "9.2.10",
  "title": "",
  "body": " continuous functions if is continuouse and then is bounded away from zero near a   Prove Lemma .    Consider the case where . Use the definition with . The picture is below; make it formal.   For the case , consider the function .   "
},
{
  "id": "problem-116",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-116",
  "type": "Problem",
  "number": "9.2.11",
  "title": "",
  "body": " continuous functions the quotient of continuous functions is continuous   Use Theorem , to prove that if and are continuous at and , then is continuous at .   "
},
{
  "id": "thm_ContComp",
  "level": "2",
  "url": "SequencesAndContinuity.html#thm_ContComp",
  "type": "Theorem",
  "number": "9.2.12",
  "title": "",
  "body": " continuous functions the composition of continuous functions is continuous   Suppose is continuous at and is continuous at . Then is continuous at (Note that .)   "
},
{
  "id": "problem-117",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-117",
  "type": "Problem",
  "number": "9.2.13",
  "title": "",
  "body": " continuous functions the composition of continuous functions is continuous   Prove Theorem     Using the definition of continuity.    Using Theorem .   "
},
{
  "id": "problem-118",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-118",
  "type": "Problem",
  "number": "9.2.14",
  "title": "",
  "body": " continuity drill problems   Show that each of the following is a continuous function at every point in its domain.    Any polynomial.    Any rational function. (A rational function is defined to be a ratio of polynomials.)     .    The other trig functions: , , , and .   "
},
{
  "id": "problem-119",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-119",
  "type": "Problem",
  "number": "9.2.15",
  "title": "",
  "body": " continuity is continuous everywhere   What allows us to conclude that is continuous at any point without referring back to the definition of continuity?   "
},
{
  "id": "problem-120",
  "level": "2",
  "url": "SequencesAndContinuity.html#problem-120",
  "type": "Problem",
  "number": "9.2.16",
  "title": "",
  "body": " continuity via sequences   Compute the following limits. Be sure to point out how continuity is involved.                  "
},
{
  "id": "Continuity-DefLimit",
  "level": "1",
  "url": "Continuity-DefLimit.html",
  "type": "Section",
  "number": "9.3",
  "title": "The Definition of the Limit of a Function",
  "body": " The Definition of the Limit of a Function  Since these days the limit concept is generally regarded as the starting point for calculus, you might think it is a little strange that we've chosen to talk about continuity first. But historically, the formal definition of a limit came after the formal definition of continuity. In some ways, the limit concept was part of a unification of all the ideas of calculus that were studied previously and, subsequently, it became the basis for all ideas in calculus. For this reason it is logical to make it the first topic covered in a calculus course.  To be sure, limits were always lurking in the background. In his attempts to justify his calculations, Newton Newton, Isaac used what he called his doctrine of Ultimate Ratios. Specifically the ratio becomes the ultimate ratio at the last instant of time before - an evanescent quantity - vanishes ( , p. 33). Similarly Leibniz's Leibniz, Gottfried Wilhelm  infinitely small differentials and can be seen as an attempt to get arbitrarily close to and , respectively. This is the idea at the heart of calculus: to get arbitrarily close to, say, without actually reaching it.  As we saw in Chapter , Lagrange Lagrange, Joseph-Louis tried to avoid the entire issue of arbitrary closesness, both in the limit and differential forms when, in 1797, he attempted to found calculus on infinite series.  Although Lagrange's Lagrange, Joseph-Louis efforts failed, they set the stage for Cauchy Cauchy, Augustin to provide a definition of derivative which in turn relied on his precise formulation of a limit. Consider the following example: to determine the slope of the tangent line (derivative) of at . We consider the graph of the difference quotient .   From the graph, it appears that but we must be careful. doesn't even exist! Somehow we must convey the idea that will approach as approaches , even though the function is not defined at . Cauchy's idea was that the limit of would equal because we can make differ from 1 by as little as we wish ( , p. 158).  Karl Weierstrass Weierstrass, Karl made these ideas precise in his lectures on analysis at the University of Berlin (1859-60) and provided us with our modern formulation.     limit We say provided that for each , there exists such that if then .    Before we delve into this, notice that it is very similar to the definition of the  This presumes that is an accumulation point of the domain of ( Definition ). We will discuss accumulation points in Chapter .  continuity of at . In fact we can readily see that .  There are two differences between this definition and the definition of continuity and they are related. The first is that we replace the value with . This is because the function may not be defined at . In a sense the limiting value is the value would have if it were defined and continuous at . The second is that we have replaced with .  Again, since needn't be defined at , we will not even consider what happens when . This is the only purpose for this change.  As with the definition of the limit of a sequence, this definition does not determine what is, it only verifies that your guess for the value of the limit is correct.  Finally, a few comments on the differences and similiarities between this limit and the limit of a sequence are in order, if for no other reason than because we use the same notation ( ) for both.  When we were working with sequences in Chapter and wrote things like we were thinking of as an integer that got bigger and bigger. To put that more mathematically, the limit parameter was taken from the set of positive integers, or .  For both continuity and the limit of a function we write things like and think of as a variable that gets arbitrarily close to the number . Again, to be more mathematical in our language we would say that the limit parameter is taken from the Well, actually, this is interesting isn't it? Do we need to take from or from The requirement in both cases is simply that we be able to choose arbitrarily close to . From Theorem of Chapter we see that this is possible whether is rational or not, so it seems either will work. This leads to the pardoxical sounding conclusion that we do not need a continuum ( ) to have continuity. This seems strange.  Before we look at the above example, let's look at some algebraic examples to see the definition in use.    Consider the function , . You probably recognize this as the difference quotient used to compute the derivative of at , so we strongly suspect that . Just as when we were dealing with limits of sequences, we should be able to use the definition to verify this. And as before, we will start with some scrapwork.   SCRAPWORK   Let . We wish to find a such that if then . With this in mind, we perform the following calculations .  Now we have a handle on that will work in the definition and we'll give the formal proof that .     Let and let . If , then .   As in our previous work with sequences and continuity, notice that the scrapwork is not part of the formal proof (though it was necessary to determine an appropriate . Also, notice that was not really used except to ensure that .   limit   Use the definition of a limit to verify that      limit verifying limits via continuity   Use the definition of a limit to verify each of the following limits.         .             Let's go back to the original problem: to show that .  While rigorous, our definition of continuity is quite cumbersome. We really need to develop some tools we can use to show continuity rigorously without having to refer directly to the definition. We have already seen in Theorem one way to do this. Here is another. The key is the observation we made after the definition of a limit: .  Read another way, we could say that provided that if we redefine (or define in the case where is not defined) then becomes continuous at . This allows us to use all of the machinery we proved about continuous functions and limits of sequences.  For example, the following corollary to Theorem comes virtually for free once we've made the observation above.     if and only if satisfies the following property:     Armed with this, we can prove the following familiar limit theorems from calculus.     limit properties of Suppose and , then              provided and , for sufficiently close to a (but not equal to ).       We will prove part (a) to give you a feel for this and let you prove parts (b) and (c).   Let be a sequence such that and . Since and we see that and . By Theorem of Chapter , we have . Since was an arbitrary sequence with and we have .      limit properties of  limit verify limit laws from calculus Prove parts (b) and (c) of Theorem .    More in line with our current needs, we have a reformulation of the Squeeze Theorem.     Squeeze Theorem for functions    Squeeze Theorem for functions Suppose , for sufficiently close to (but not equal to ). If , then also.       Squeeze Theorem for functions Prove Theorem .    Use Theorem , the Squeeze Theorem for sequences from Chapter .    Returning to we'll see that the Squeeze Theorem is just what we need. First notice that since is an even function, we only need to focus on in our inequalities. Consider the unit circle.    limit   Use the fact that to show that if , then . Use the fact that all of these functions are even to extend the inequality for and use the Squeeze Theorem to show .    "
},
{
  "id": "def_limit",
  "level": "2",
  "url": "Continuity-DefLimit.html#def_limit",
  "type": "Definition",
  "number": "9.3.1",
  "title": "",
  "body": "   limit We say provided that for each , there exists such that if then .   "
},
{
  "id": "p-855",
  "level": "2",
  "url": "Continuity-DefLimit.html#p-855",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "accumulation point "
},
{
  "id": "example-13",
  "level": "2",
  "url": "Continuity-DefLimit.html#example-13",
  "type": "Example",
  "number": "9.3.2",
  "title": "",
  "body": "  Consider the function , . You probably recognize this as the difference quotient used to compute the derivative of at , so we strongly suspect that . Just as when we were dealing with limits of sequences, we should be able to use the definition to verify this. And as before, we will start with some scrapwork.   SCRAPWORK   Let . We wish to find a such that if then . With this in mind, we perform the following calculations .  Now we have a handle on that will work in the definition and we'll give the formal proof that .   "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "Continuity-DefLimit.html#proof-17",
  "type": "Proof",
  "number": "9.3.1",
  "title": "",
  "body": " Let and let . If , then .  "
},
{
  "id": "problem-121",
  "level": "2",
  "url": "Continuity-DefLimit.html#problem-121",
  "type": "Problem",
  "number": "9.3.3",
  "title": "",
  "body": " limit   Use the definition of a limit to verify that    "
},
{
  "id": "problem-122",
  "level": "2",
  "url": "Continuity-DefLimit.html#problem-122",
  "type": "Problem",
  "number": "9.3.4",
  "title": "",
  "body": " limit verifying limits via continuity   Use the definition of a limit to verify each of the following limits.         .            "
},
{
  "id": "cor_limit-by-sequences",
  "level": "2",
  "url": "Continuity-DefLimit.html#cor_limit-by-sequences",
  "type": "Corollary",
  "number": "9.3.5",
  "title": "",
  "body": "   if and only if satisfies the following property:    "
},
{
  "id": "thm_CalcLimits",
  "level": "2",
  "url": "Continuity-DefLimit.html#thm_CalcLimits",
  "type": "Theorem",
  "number": "9.3.6",
  "title": "",
  "body": "   limit properties of Suppose and , then              provided and , for sufficiently close to a (but not equal to ).      "
},
{
  "id": "proof-18",
  "level": "2",
  "url": "Continuity-DefLimit.html#proof-18",
  "type": "Proof",
  "number": "9.3.2",
  "title": "",
  "body": " Let be a sequence such that and . Since and we see that and . By Theorem of Chapter , we have . Since was an arbitrary sequence with and we have .  "
},
{
  "id": "problem-123",
  "level": "2",
  "url": "Continuity-DefLimit.html#problem-123",
  "type": "Problem",
  "number": "9.3.7",
  "title": "",
  "body": "   limit properties of  limit verify limit laws from calculus Prove parts (b) and (c) of Theorem .   "
},
{
  "id": "thm_SqueezeTheoremFunctions",
  "level": "2",
  "url": "Continuity-DefLimit.html#thm_SqueezeTheoremFunctions",
  "type": "Theorem",
  "number": "9.3.8",
  "title": "",
  "body": "   Squeeze Theorem for functions    Squeeze Theorem for functions Suppose , for sufficiently close to (but not equal to ). If , then also.   "
},
{
  "id": "problem-124",
  "level": "2",
  "url": "Continuity-DefLimit.html#problem-124",
  "type": "Problem",
  "number": "9.3.9",
  "title": "",
  "body": "   Squeeze Theorem for functions Prove Theorem .    Use Theorem , the Squeeze Theorem for sequences from Chapter .   "
},
{
  "id": "problem-125",
  "level": "2",
  "url": "Continuity-DefLimit.html#problem-125",
  "type": "Problem",
  "number": "9.3.10",
  "title": "",
  "body": " limit   Use the fact that to show that if , then . Use the fact that all of these functions are even to extend the inequality for and use the Squeeze Theorem to show .   "
},
{
  "id": "Continuity-DerivativeAfterthought",
  "level": "1",
  "url": "Continuity-DerivativeAfterthought.html",
  "type": "Section",
  "number": "9.4",
  "title": "The Derivative, An Afterthought",
  "body": " The Derivative, An Afterthought  No, the derivative isn't really an afterthought. Along with the integral it is, in fact, one of the most powerful and useful mathematical objects ever devised and we've been working very hard to provide a solid, rigorous foundation for it. In that sense it is a primary focus of our investigations.  On the other hand, now that we have built up all of the machinery we need to define and explore the concept of the derivative it will appear rather pedestrian alongside ideas like the convergence of power series, Fourier series, and the bizarre properties of and .  You spent an entire semester learning about the properties of the derivative and how to use them to explore the properties of functions so we will not repeat that effort here. Instead we will define it formally in terms of the ideas and techniques we've developed thus far.  The Derivative  differentiation definition of the derivative   Given a function defined on an interval we define     There are a few fairly obvious facts about this definition which are nevertheless worth noticing explicitly:     The derivative is defined at a point. If it is defined at every point in an interval then we say that the derivative exists at every point on the interval.    Since it is defined at a point it is at least theoretically possible for a function to be differentiable at a single point in its entire domain.    Since it is defined as a limit and not all limits exist, functions are not necessarily differentiable.    Since it is defined as a limit, Corollary applies. That is, exists if and only if , if then . Since this could also be written as .      continuity implied by differentiability  differentiation differentiability implies continuity    Differentiability Implies Continuity   If is differentiable at a point then is continuous at as well.     differentiation differentiability implies continuity   Prove Theorem     As we mentioned, the derivative is an extraordinarily useful mathematical tool but it is not our intention to learn to use it here. Our purpose here is to define it rigorously (done) and to show that our formal definition does in fact recover the useful properties you came to know and love in your calculus course.  The first such property is known as Fermat's Theorem.   Fermat's Theorem  Fermat's Theorem   Suppose is differentiable in some interval containing . If for every in , then .     Since exists we know that if converges to zero then the sequence converges to . The proof consists of showing that  and that from which we conclude that . We will only show the first part. The second is left as an exercise.   Claim:  .  Let be sufficiently large that and take . Then and , so that   Therefore also.      Fermat's Theorem if is a maximum then Show that and conclude that .       Fermat's Theorem if is a minimum then Show that if for all in some interval then too.    Many of the most important properties of the derivative follow from what is called the Mean Value Theorem ( MVT ) which we now state.     The Mean Value Theorem    Mean Value Theorem, the Suppose exists for every and is continuous on . Then there is a real number such that     However, it would be difficult to prove the MVT right now. So we will first state and prove Rolle's Theorem, which can be seen as a special case of the MVT. The proof of the MVT will then follow easily.  Michel Rolle first stated the following theorem in 1691. Given this date and the nature of the theorem it would be reasonable to suppose that Rolle was one of the early developers of calculus but this is not so. In fact, Rolle was disdainful of both Newton Newton, Isaac and Leibniz's Leibniz, Gottfried Wilhelm versions of calculus, once deriding them as a collection of ingenious fallacies. It is a bit ironic that his theorem is so fundamental to the modern development of the calculus he ridiculed.   Rolle's Theorem    Rolle's Theorem   Suppose exists for every , is continuous on , and .  Then there is a real number such that .      Any proof that relies on the Extreme Value Theorem is not complete until the EVT has been proved. We'll get to this in Chapter .   Since is continuous on we see, by the Extreme Value Theorem, Extreme Value Theorem (EVT) Rolle's Theorem, and that has both a maximum and a minimum on . Denote the maximum by and the minimum by . There are several cases:   Case 1:   . In this case is constant (why?). Therefore for every .    Case 2:   . In this case there is a real number such that is a local minimum. By Fermat's Theorem, .    Case 3:   . In this case there is a real number such that is a local maximum. By Fermat's Theorem, .    Case 4:   is neither a maximum nor a minimum. In this case there is a real number such that is a local maximum, and a real number such that is a local minimum. By Fermat's Theorem, .      With Rolle's Theorem in hand we can prove the MVT which is really a corollary to Rolle's Theorem or, more precisely, it is a generalization of Rolle's Theorem. To prove it we only need to find the right function to apply Rolle's Theorem to. The following figure shows a function, , cut by a secant line, , from to .   The vertical difference from to the secant line, indicated by in the figure should do the trick. You take it from there.     Mean Value Theorem, the Prove the Mean Value Theorem.    The Mean Value Theorem is extraordinarily useful. Almost all of the properties of the derivative that you used in calculus follow more or less easily from it. For example the following is true.    If for every in the interval then for every where we have .  That is, is increasing on .     Suppose and are as described in the corollary. Then by the Mean Value Theorem there is some number, say such that .  Since and we have , or .      differentiation if on an interval then is decreasing Show that if for every in the interval then is decreasing on .      Suppose is differentiable on some interval , is continuous on , and that for some . Then there is an interval, , containing such that for every in where , .       differentiation implies is increasing nearby Prove Corollary .        differentiation  implies is decreasing nearby  Show that if is differentiable on some interval and that for some then there is an interval, , containing such that for every in where , .    "
},
{
  "id": "def_derivative",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#def_derivative",
  "type": "Definition",
  "number": "9.4.1",
  "title": "The Derivative.",
  "body": "The Derivative  differentiation definition of the derivative   Given a function defined on an interval we define    "
},
{
  "id": "thm_DiffImpCont",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#thm_DiffImpCont",
  "type": "Theorem",
  "number": "9.4.2",
  "title": "",
  "body": " continuity implied by differentiability  differentiation differentiability implies continuity    Differentiability Implies Continuity   If is differentiable at a point then is continuous at as well.   "
},
{
  "id": "problem-126",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#problem-126",
  "type": "Problem",
  "number": "9.4.3",
  "title": "",
  "body": " differentiation differentiability implies continuity   Prove Theorem    "
},
{
  "id": "thm_FermatsTheorem",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#thm_FermatsTheorem",
  "type": "Theorem",
  "number": "9.4.4",
  "title": "Fermat’s Theorem.",
  "body": " Fermat's Theorem  Fermat's Theorem   Suppose is differentiable in some interval containing . If for every in , then .   "
},
{
  "id": "proof-19",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#proof-19",
  "type": "Proof",
  "number": "9.4.1",
  "title": "",
  "body": " Since exists we know that if converges to zero then the sequence converges to . The proof consists of showing that  and that from which we conclude that . We will only show the first part. The second is left as an exercise.   Claim:  .  Let be sufficiently large that and take . Then and , so that   Therefore also.  "
},
{
  "id": "problem-127",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#problem-127",
  "type": "Problem",
  "number": "9.4.5",
  "title": "",
  "body": "   Fermat's Theorem if is a maximum then Show that and conclude that .   "
},
{
  "id": "problem-128",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#problem-128",
  "type": "Problem",
  "number": "9.4.6",
  "title": "",
  "body": "   Fermat's Theorem if is a minimum then Show that if for all in some interval then too.   "
},
{
  "id": "p-918",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#p-918",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "MVT "
},
{
  "id": "thm_MVT",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#thm_MVT",
  "type": "Theorem",
  "number": "9.4.7",
  "title": "",
  "body": "   The Mean Value Theorem    Mean Value Theorem, the Suppose exists for every and is continuous on . Then there is a real number such that    "
},
{
  "id": "thm_Rolle_s_Theorem",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#thm_Rolle_s_Theorem",
  "type": "Theorem",
  "number": "9.4.8",
  "title": "",
  "body": " Rolle's Theorem    Rolle's Theorem   Suppose exists for every , is continuous on , and .  Then there is a real number such that .   "
},
{
  "id": "proof-20",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#proof-20",
  "type": "Proof",
  "number": "9.4.2",
  "title": "",
  "body": "  Any proof that relies on the Extreme Value Theorem is not complete until the EVT has been proved. We'll get to this in Chapter .   Since is continuous on we see, by the Extreme Value Theorem, Extreme Value Theorem (EVT) Rolle's Theorem, and that has both a maximum and a minimum on . Denote the maximum by and the minimum by . There are several cases:   Case 1:   . In this case is constant (why?). Therefore for every .    Case 2:   . In this case there is a real number such that is a local minimum. By Fermat's Theorem, .    Case 3:   . In this case there is a real number such that is a local maximum. By Fermat's Theorem, .    Case 4:   is neither a maximum nor a minimum. In this case there is a real number such that is a local maximum, and a real number such that is a local minimum. By Fermat's Theorem, .     "
},
{
  "id": "problem-129",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#problem-129",
  "type": "Problem",
  "number": "9.4.9",
  "title": "",
  "body": "   Mean Value Theorem, the Prove the Mean Value Theorem.   "
},
{
  "id": "cor_PosDerivIncFunc1",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#cor_PosDerivIncFunc1",
  "type": "Corollary",
  "number": "9.4.10",
  "title": "",
  "body": "  If for every in the interval then for every where we have .  That is, is increasing on .   "
},
{
  "id": "proof-21",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#proof-21",
  "type": "Proof",
  "number": "9.4.3",
  "title": "",
  "body": " Suppose and are as described in the corollary. Then by the Mean Value Theorem there is some number, say such that .  Since and we have , or .  "
},
{
  "id": "problem-130",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#problem-130",
  "type": "Problem",
  "number": "9.4.11",
  "title": "",
  "body": "   differentiation if on an interval then is decreasing Show that if for every in the interval then is decreasing on .   "
},
{
  "id": "cor_PosDerivIncFunc2",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#cor_PosDerivIncFunc2",
  "type": "Corollary",
  "number": "9.4.12",
  "title": "",
  "body": "  Suppose is differentiable on some interval , is continuous on , and that for some . Then there is an interval, , containing such that for every in where , .   "
},
{
  "id": "problem-131",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#problem-131",
  "type": "Problem",
  "number": "9.4.13",
  "title": "",
  "body": "   differentiation implies is increasing nearby Prove Corollary .   "
},
{
  "id": "problem-132",
  "level": "2",
  "url": "Continuity-DerivativeAfterthought.html#problem-132",
  "type": "Problem",
  "number": "9.4.14",
  "title": "",
  "body": "    differentiation  implies is decreasing nearby  Show that if is differentiable on some interval and that for some then there is an interval, , containing such that for every in where , .   "
},
{
  "id": "Continuity-AddProb",
  "level": "1",
  "url": "Continuity-AddProb.html",
  "type": "Section",
  "number": "9.5",
  "title": "Additional Problems",
  "body": " Additional Problems   continuous functions a constant function is continuous   Use the definition of continuity to prove that the constant function is continuous at any point .     continuous functions is continuous everywhere   Use the definition of continuity to prove that is continuous at .   You may want to use the fact to find a .    Use part (a) to prove that is continuous at any positive real number .    . This is a combination of functions which are continuous at . Be sure to explain how you know that is continuous at .       continuity formal definition of discontinuity Write a formal definition of the statement is not continuous at , and use it to prove that the function is not continuous at .    "
},
{
  "id": "problem-133",
  "level": "2",
  "url": "Continuity-AddProb.html#problem-133",
  "type": "Problem",
  "number": "9.5.1",
  "title": "",
  "body": " continuous functions a constant function is continuous   Use the definition of continuity to prove that the constant function is continuous at any point .   "
},
{
  "id": "problem-134",
  "level": "2",
  "url": "Continuity-AddProb.html#problem-134",
  "type": "Problem",
  "number": "9.5.2",
  "title": "",
  "body": " continuous functions is continuous everywhere   Use the definition of continuity to prove that is continuous at .   You may want to use the fact to find a .    Use part (a) to prove that is continuous at any positive real number .    . This is a combination of functions which are continuous at . Be sure to explain how you know that is continuous at .   "
},
{
  "id": "problem-135",
  "level": "2",
  "url": "Continuity-AddProb.html#problem-135",
  "type": "Problem",
  "number": "9.5.3",
  "title": "",
  "body": "   continuity formal definition of discontinuity Write a formal definition of the statement is not continuous at , and use it to prove that the function is not continuous at .   "
},
{
  "id": "IVTandEVT-Completeness",
  "level": "1",
  "url": "IVTandEVT-Completeness.html",
  "type": "Section",
  "number": "10.1",
  "title": "Completeness of the Real Number System",
  "body": " Completeness of the Real Number System  Recall that in deriving the Lagrange and Cauchy forms of the remainder for Taylor series, we made use of the Extreme Value Theorem ( EVT ) and Intermediate Value Theorem ( IVT ). In Chapter , we produced an analytic definition of continuity that we can use to prove these theorems. To provide the rest of the necessary tools we need to explore the make-up of the real number system. To illustrate what we mean, suppose that we only used the rational number system. We could still use our definition of continuity and could still consider continuous functions such as . Notice that is a value that lies between and .   The IVT says that somewhere between and , must take on the value . That is, there must exist some number such that . You might say, Big deal! Everyone knows works.   However, we are only working with rational numbers and  is not rational. As we saw in Chapter the rational number system has holes in it, whereas the real number system doesn't. Again, Big deal! Let's just say that the real number system contains (square) roots.   This sounds reasonable and it actually works for square roots, but consider the function . We know this is a continuous function. We also know that and . According to the IVT, there should be some number , where . The graph is below.   The situation is not as transparent as before. What would this mysterious be where the curve crosses the axis? Somehow we need to convey the idea that the real number system is a continuum. That is, it has no holes in it.  How about this? Why don't we just say that it has no holes in it? Sometimes the simple answer works best! But not in this case. How are we going to formulate a rigorous proof based on this statement? Just like with convergence and continuity, what we need is a rigorous way to convey this idea that the real number system does not have any holes, that it is complete.   We will see that there are several different, but equivalent ways to convey this notion of completeness. We will explore some of them in this chapter. For now we adopt the following as our Completeness Axiom for the real number system.  Nested Interval Property of the Real Number System ( NIP )   Suppose we have two sequences of real numbers and satisfying the following conditions:      (this says that the sequence, , is non-decreasing)     (this says that the sequence, , is non-increasing)       ,           Then there exists a unique number such that for all .    Geometrically, we have the following situation.   Notice that we have two sequences and , one increasing (really non-decreasing) and one decreasing (non-increasing). These sequences do not pass each other. In fact, the following is true:   Nested Interval Property (NIP) endpoints   Let be sequences as in the NIP. Show that for all , .    They are also coming together in the sense that . The NIP says that in this case there is a unique real number in the middle of all of this for all .   If there was no such then there would be a hole where these two sequences come together. The NIP guarantees that there is no such hole. We do not need to prove this since an axiom is, by definition, a self evident truth. We are taking it on faith that the real number system obeys this law. The next problem shows that the completeness property distinguishes the real number system from the rational number system.   Least Upper Bound Property (LUBP) implies the existence of irrational numbers   Find two sequences of rational numbers and which satisfy properties 1-4 of the NIP and such that there is no rational number satisfying the conclusion of the NIP.   Consider the decimal expansion of an irrational number.    Find two sequences of rational numbers and which satisfy properties 1-4 of the NIP and such that there is a rational number satisfying the conclusion of the NIP.    You might find the name Nested Interval Property to be somewhat curious. One way to think about this property is to consider that we have a sequence of nested closed intervals  whose lengths are shrinking to . The conclusion is that the intersection of these intervals is non-empty and, in fact, consists of a single point. That is, .  It appears that the sequences and in the NIP converge to . This is, in fact, true and can be proven rigorously. In what follows, this will prove to be a valuable piece of information.     Nested Interval Property (NIP) endpoints  limit of interval endpoints in the NIP Suppose that we have two sequences and satisfying all of the assumptions of the Nested Interval Property. If is the unique number such that for all , then and .       Nested Interval Property (NIP) endpoints Prove Theorem .    To illustrate the idea that the NIP plugs the holes in the real line, we will prove the existence of square roots of nonnegative real numbers.   square roots exist   Suppose . There exists a real number such that .    Notice that we can't just say, Let , since the idea is to show that this square root exists. In fact, throughout this proof, we cannot really use a square root symbol as we haven't yet proved that they (square roots) exist. We will give the idea behind the proof as it illustrates how the NIP is used.   Sketch of Proof  Our strategy is to construct two sequences which will narrow in on the number that we seek. With that in mind, we need to find a number such that and a number such that . (Remember that we can't say or .) There are many possibilities, but how about and You can check that these will satisfy  . Furthermore . This is the starting point.  The technique we will employ is often called a bisection technique, and is a useful way to set ourselves up for applying the NIP. Let be the midpoint of the interval . Then either we have or . In the case , we really want to take the place of since it is larger than , but still represents an underestimate for what would be the square root of . This thinking prompts the following move. If , we will relabel things by letting and . The situation looks like this on the number line.   In the other case where , we will relabel things by letting and . The situation looks like this on the number line.   In either case, we've reduced the length of the interval where the square root lies to half the size it was before. Stated in more specific terms, in either case we have the same results: and .  Now we play the same game, but instead we start with the interval . Let be the midpoint of . Then we have or . If , we relabel and . If , we relabel and . In either case, we end up with and .  Continuing in this manner, we will produce two sequences, and satisfying the following conditions:               ,          These sequences also satisfy the following property:      Properties 1-4 tell us that and satisfy all of the conditions of the NIP, so we can conclude that there must exist a real number such that for all . At this point, you should be able to use property 5. to show that as desired.      Nested Interval Property (NIP) square roots of integers, and  Nested Interval Property (NIP) implies the existence of square roots of integers Turn the above outline into a formal proof of Theorem .    The bisection method we employed in the proof of Theorem is pretty typical of how we will use the NIP, as taking midpoints ensures that we will create a sequence of nested intervals. We will employ this strategy in the proofs of the IVT and EVT. Deciding how to relabel the endpoints of our intervals will be determined by what we want to do with these two sequences of real numbers. This will typically lead to a fifth property, which will be crucial in proving that the guaranteed by the NIP does what we want it to do. Specifically, in the above example, we always wanted our candidate for to be in the interval . This judicious choice led to the extra Property 5:  . In applying the NIP to prove the IVT and EVT, we will find that properties 1-4 will stay the same. Property 5 is what will change based on the property we want to have.  Before we tackle the IVT and EVT, let's use the NIP to address an interesting question about the Harmonic Series. series Harmonic Series slow divergence of Recall that the Harmonic Series, , grows without bound, that is, . The question is how slowly does this series grow? For example, how many terms would it take before the series surpasses 100? 1000? 10000? Leonhard Euler Euler, Leonhard decided to tackle this problem in the following way. Euler decided to consider the . This limit is called Euler's constant and is denoted by . This says that for large, we have ln . If we could approximate , then we could replace the inequality with the more tractable inequality ln  and solve for in this. This should tell us roughly how many terms would need to be added in the Harmonic Series to surpass 100. Approximating with a computer is not too bad. We could make as large as we wish in ln to make closer approximations for . The real issue is, HOW DO WE KNOW THAT   ACTUALLY EXISTS?   You might want to say that obviously it should, but let us point out that as of the printing of this book (2013), it is not even known if is rational or irrational. So, in our opinion the existence of this limit is not so obvious. This is where the NIP will come into play; we will use it to show that this limit, in fact, exists. The details are in the following problem.   Euler, Leonhard Euler's constant existence of   The purpose of this problem is to show that exists.    Let . Use the following diagram to show      Let . Use a similar diagram to show that .    Let . Show that and satisfy the hypotheses of the nested interval property and use the NIP to conclude that there is a real number such that for all .    Conclude that .     Euler, Leonhard Euler's constant approximating   Use the fact that for all to approximate to three decimal places.     Euler, Leonhard Euler's constant slow convergence to   Use the fact that for large , to determine approximately how large must be to make .    Suppose we have a supercomputer which can add 10 trillion terms of the Harmonic Series per second. Approximately how many earth lifetimes would it take for this computer to sum the Harmonic Series until it surpasses 100?    "
},
{
  "id": "p-950",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#p-950",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "EVT IVT "
},
{
  "id": "NIP",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#NIP",
  "type": "Axiom",
  "number": "10.1.1",
  "title": "Nested Interval Property of the Real Number System (<dfn class=\"terminology\">NIP<\/dfn>).",
  "body": "Nested Interval Property of the Real Number System ( NIP )   Suppose we have two sequences of real numbers and satisfying the following conditions:      (this says that the sequence, , is non-decreasing)     (this says that the sequence, , is non-increasing)       ,           Then there exists a unique number such that for all .   "
},
{
  "id": "problem-136",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#problem-136",
  "type": "Problem",
  "number": "10.1.2",
  "title": "",
  "body": " Nested Interval Property (NIP) endpoints   Let be sequences as in the NIP. Show that for all , .   "
},
{
  "id": "problem-137",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#problem-137",
  "type": "Problem",
  "number": "10.1.3",
  "title": "",
  "body": " Least Upper Bound Property (LUBP) implies the existence of irrational numbers   Find two sequences of rational numbers and which satisfy properties 1-4 of the NIP and such that there is no rational number satisfying the conclusion of the NIP.   Consider the decimal expansion of an irrational number.    Find two sequences of rational numbers and which satisfy properties 1-4 of the NIP and such that there is a rational number satisfying the conclusion of the NIP.   "
},
{
  "id": "thm_ConvergeToC",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#thm_ConvergeToC",
  "type": "Theorem",
  "number": "10.1.4",
  "title": "",
  "body": "   Nested Interval Property (NIP) endpoints  limit of interval endpoints in the NIP Suppose that we have two sequences and satisfying all of the assumptions of the Nested Interval Property. If is the unique number such that for all , then and .   "
},
{
  "id": "problem-138",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#problem-138",
  "type": "Problem",
  "number": "10.1.5",
  "title": "",
  "body": "   Nested Interval Property (NIP) endpoints Prove Theorem .   "
},
{
  "id": "thm_SqrtsExist",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#thm_SqrtsExist",
  "type": "Theorem",
  "number": "10.1.6",
  "title": "",
  "body": " square roots exist   Suppose . There exists a real number such that .   "
},
{
  "id": "proof-22",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#proof-22",
  "type": "Proof",
  "number": "10.1.1",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  Our strategy is to construct two sequences which will narrow in on the number that we seek. With that in mind, we need to find a number such that and a number such that . (Remember that we can't say or .) There are many possibilities, but how about and You can check that these will satisfy  . Furthermore . This is the starting point.  The technique we will employ is often called a bisection technique, and is a useful way to set ourselves up for applying the NIP. Let be the midpoint of the interval . Then either we have or . In the case , we really want to take the place of since it is larger than , but still represents an underestimate for what would be the square root of . This thinking prompts the following move. If , we will relabel things by letting and . The situation looks like this on the number line.   In the other case where , we will relabel things by letting and . The situation looks like this on the number line.   In either case, we've reduced the length of the interval where the square root lies to half the size it was before. Stated in more specific terms, in either case we have the same results: and .  Now we play the same game, but instead we start with the interval . Let be the midpoint of . Then we have or . If , we relabel and . If , we relabel and . In either case, we end up with and .  Continuing in this manner, we will produce two sequences, and satisfying the following conditions:               ,          These sequences also satisfy the following property:      Properties 1-4 tell us that and satisfy all of the conditions of the NIP, so we can conclude that there must exist a real number such that for all . At this point, you should be able to use property 5. to show that as desired.  "
},
{
  "id": "problem-139",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#problem-139",
  "type": "Problem",
  "number": "10.1.7",
  "title": "",
  "body": "   Nested Interval Property (NIP) square roots of integers, and  Nested Interval Property (NIP) implies the existence of square roots of integers Turn the above outline into a formal proof of Theorem .   "
},
{
  "id": "problem-140",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#problem-140",
  "type": "Problem",
  "number": "10.1.8",
  "title": "",
  "body": " Euler, Leonhard Euler's constant existence of   The purpose of this problem is to show that exists.    Let . Use the following diagram to show      Let . Use a similar diagram to show that .    Let . Show that and satisfy the hypotheses of the nested interval property and use the NIP to conclude that there is a real number such that for all .    Conclude that .   "
},
{
  "id": "problem-141",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#problem-141",
  "type": "Problem",
  "number": "10.1.9",
  "title": "",
  "body": " Euler, Leonhard Euler's constant approximating   Use the fact that for all to approximate to three decimal places.   "
},
{
  "id": "problem-142",
  "level": "2",
  "url": "IVTandEVT-Completeness.html#problem-142",
  "type": "Problem",
  "number": "10.1.10",
  "title": "",
  "body": " Euler, Leonhard Euler's constant slow convergence to   Use the fact that for large , to determine approximately how large must be to make .    Suppose we have a supercomputer which can add 10 trillion terms of the Harmonic Series per second. Approximately how many earth lifetimes would it take for this computer to sum the Harmonic Series until it surpasses 100?   "
},
{
  "id": "IVTandEVT-ProofOfIVT",
  "level": "1",
  "url": "IVTandEVT-ProofOfIVT.html",
  "type": "Section",
  "number": "10.2",
  "title": "Proof of the Intermediate Value Theorem",
  "body": " Proof of the Intermediate Value Theorem  We now have all of the tools we need to prove the Intermediate Value Theorem ( IVT ).     Intermediate Value Theorem (IVT)    Intermediate Value Theorem (IVT) Suppose is continuous on and is any real number between and . Then there exists a real number such that .     Sketch of Proof  We have two cases to consider: and .  We will look at the case . Let and , so we have and . Let be the midpoint of and notice that we have either or . If , then we relabel and . If , then we relabel and . In either case, we end up with , , , and .  Now play the same game with the interval . If we keep playing this game, we will generate two sequences and , satisfying all of the conditions of the nested interval property. These sequences will also satisfy the following extra property:  . By the NIP, there exists a such that ,  . This should be the that we seek though this is not obvious. Specifically, we need to show that . This should be where the continuity of at and the extra property on and come into play.      Intermediate Value Theorem (IVT) the case Turn the ideas of the previous paragraphs into a formal proof of the IVT for the case .       Intermediate Value Theorem (IVT) the case We can modify the proof of the case into a proof of the IVT for the case . However, there is a sneakier way to prove this case by applying the IVT to the function . Do this to prove the IVT for the case .       polynomials with odd degree must have a root  Intermediate Value Theorem (IVT) a polynomial with odd degree must have a root Use the IVT to prove that any polynomial of odd degree must have a real root.    "
},
{
  "id": "p-1003",
  "level": "2",
  "url": "IVTandEVT-ProofOfIVT.html#p-1003",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "IVT "
},
{
  "id": "IntermediateValueTheorem",
  "level": "2",
  "url": "IVTandEVT-ProofOfIVT.html#IntermediateValueTheorem",
  "type": "Theorem",
  "number": "10.2.1",
  "title": "",
  "body": "   Intermediate Value Theorem (IVT)    Intermediate Value Theorem (IVT) Suppose is continuous on and is any real number between and . Then there exists a real number such that .   "
},
{
  "id": "proof-23",
  "level": "2",
  "url": "IVTandEVT-ProofOfIVT.html#proof-23",
  "type": "Proof",
  "number": "10.2.1",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  We have two cases to consider: and .  We will look at the case . Let and , so we have and . Let be the midpoint of and notice that we have either or . If , then we relabel and . If , then we relabel and . In either case, we end up with , , , and .  Now play the same game with the interval . If we keep playing this game, we will generate two sequences and , satisfying all of the conditions of the nested interval property. These sequences will also satisfy the following extra property:  . By the NIP, there exists a such that ,  . This should be the that we seek though this is not obvious. Specifically, we need to show that . This should be where the continuity of at and the extra property on and come into play.  "
},
{
  "id": "problem-143",
  "level": "2",
  "url": "IVTandEVT-ProofOfIVT.html#problem-143",
  "type": "Problem",
  "number": "10.2.2",
  "title": "",
  "body": "   Intermediate Value Theorem (IVT) the case Turn the ideas of the previous paragraphs into a formal proof of the IVT for the case .   "
},
{
  "id": "problem-144",
  "level": "2",
  "url": "IVTandEVT-ProofOfIVT.html#problem-144",
  "type": "Problem",
  "number": "10.2.3",
  "title": "",
  "body": "   Intermediate Value Theorem (IVT) the case We can modify the proof of the case into a proof of the IVT for the case . However, there is a sneakier way to prove this case by applying the IVT to the function . Do this to prove the IVT for the case .   "
},
{
  "id": "problem-145",
  "level": "2",
  "url": "IVTandEVT-ProofOfIVT.html#problem-145",
  "type": "Problem",
  "number": "10.2.4",
  "title": "",
  "body": "   polynomials with odd degree must have a root  Intermediate Value Theorem (IVT) a polynomial with odd degree must have a root Use the IVT to prove that any polynomial of odd degree must have a real root.   "
},
{
  "id": "IVTandEVT-BWT",
  "level": "1",
  "url": "IVTandEVT-BWT.html",
  "type": "Section",
  "number": "10.3",
  "title": "The Bolzano-Weierstrass Theorem",
  "body": " The Bolzano-Weierstrass Theorem  Once we introduced the Nested Interval Property ( Axiom ), the Intermediate Value Theorem ( Theorem ) followed pretty readily. The proof of Extreme Value Theorem ( Theorem ) takes a bit more work. First we need to show that a function that satisfies the conditions of the EVT is bounded.     continuous functions continuous function on a closed, bounded interval is bounded A continuous function defined on a closed, bounded interval must be bounded. That is, let be a continuous function defined on . Then there exists a positive real number such that for all .     Sketch of Alleged Proof: Let's assume, for contradiction, that there is no such bound . This says that for any positive integer , there must exist such that . (Otherwise would be a bound for .) IF the sequence converged to something in , say , then we would have our contradiction. Indeed, we would have . By the continuity of at and Theorem of Chapter , we would have . This would say that the sequence converges, so by Lemma of Chapter , it must be bounded. This would provide our contradiction, as we had , for all positive integers . QED?   This would all work well except for one little problem. The way it was constructed, there is no reason to expect the sequence to converge to anything and we can't make such an assumption. That is why we emphasized the IF above. Fortunately, this idea can be salvaged. While it is true that the sequence may not converge, part of it will. We will need the following definition.     sequences subsequences Let be a strictly increasing sequence of positive integers; that is, . If is a sequence, then is called a subsequence of .    The idea is that a subsequence of a sequence is a part of the sequence, , which is itself a sequence. However, it is a little more restrictive. We can choose any term in our sequence to be part of the subsequence, but once we choose that term, we can't go backwards. This is where the condition comes in. For example, suppose we started our subsequence with the term . We could not choose our next term to be . The subscript of the next term would have to be greater than 100. In fact, the thing about a subsequence is that it is all in the subscripts; we are really choosing a subsequence of the sequence of subscripts in .   sequences subsequences   Given the sequence , the following are subsequences.               itself.     sequences not subsequences   The following are NOT subsequences.                   The subscripts in the examples we have seen so far have a discernable pattern, but this need not be the case. For example, would be a subsequence as long as the subscripts form an increasing sequence themselves.     sequences all subsequences of a convergent sequence converge Suppose . Prove that for any subsequence of .    First prove that .    A very important theorem about subsequences was introduced by Bernhard Bolzano Bolzano, Bernhard and, later, independently proven Weierstrass, Karl by Karl Weierstrass. Basically, this theorem says that any bounded sequence of real numbers has a convergent subsequence.     The Bolzano-Weierstrass Theorem    Bolzano-Weierstrass Theorem Let be a sequence of real numbers such that ,  . Then there exists and a subsequence , such that .    As an example of this theorem, consider the sequence .  This sequence does not converge, but the subsequence converges to . This is not the only convergent subsequence, as converges to . Notice that if the sequence is unbounded, then all bets are off; the sequence may have a convergent subsequence or it may not. The sequences and represent these possibilities as the first has, for example, and the second one has none.  The Bolzano-Weierstrass Theorem says that no matter how random the sequence may be, as long as it is bounded then some part of it must converge. This is very useful when one has some process which produces a random sequence such as what we had in the idea of the alleged proof in Theorem .   Sketch of a Proof of the Bolzano-Weierstrass Theorem  Suppose we have our sequence such that ,  . To find our for the subsequence to converge to we will use the NIP. Since we are already using as our original sequence, we will need to use different letters in setting ourselves up for the NIP. With this in mind, let and , and notice that for infinitely many . (This is, in fact true for all , but you'll see why we said it the way we did.) Let be the midpoint of and notice that either for infinitely many or for infinitely many . If for infinitely many , then we relabel and . If for infinitely many , then relabel and . In either case, we get , , and for infinitely many .  Now we consider the interval and let be the midpoint of . Since for infinitely many , then either for infinitely many or for infinitely many . If for infinitely many , then we relabel and . If for infinitely many , then we relabel and . In either case, we get , , and for infinitely many .  If we continue in this manner, we will produce two sequences and with the following properties:                        For each , for infinitely many      By properties 1-5 and the NIP, there exists a unique such that , for all . In particular, .  We have our . Now we need to construct a subsequence converging to it. Since for infinitely many , choose an integer such that . Since for infinitely many , choose an integer such that . (Notice that to make a subsequence it is crucial that , and this is why we needed to insist that for infinitely many .) Continuing in this manner, we should be able to build a subsequence that will converge to . You can supply the details in the following problem.      Bolzano-Weierstrass Theorem (BWT) Turn the ideas of the above outline into a formal proof of the Bolzano-Weierstrass Theorem.       Bolzano-Weierstrass Theorem (BWT) implies that a continuous functions on a closed set is bounded  continuous functions on a closed set, and the Bolzano-Weierstrass Theorem  continuity Bolzano-Weierstrass Theorem implies a continuous function on a closed set is bounded Use the Bolzano-Weierstrass Theorem to complete the proof of Theorem .    "
},
{
  "id": "thm_CompactBounded",
  "level": "2",
  "url": "IVTandEVT-BWT.html#thm_CompactBounded",
  "type": "Theorem",
  "number": "10.3.1",
  "title": "",
  "body": "   continuous functions continuous function on a closed, bounded interval is bounded A continuous function defined on a closed, bounded interval must be bounded. That is, let be a continuous function defined on . Then there exists a positive real number such that for all .   "
},
{
  "id": "def_subsequences",
  "level": "2",
  "url": "IVTandEVT-BWT.html#def_subsequences",
  "type": "Definition",
  "number": "10.3.2",
  "title": "",
  "body": "   sequences subsequences Let be a strictly increasing sequence of positive integers; that is, . If is a sequence, then is called a subsequence of .   "
},
{
  "id": "example-14",
  "level": "2",
  "url": "IVTandEVT-BWT.html#example-14",
  "type": "Example",
  "number": "10.3.3",
  "title": "",
  "body": " sequences subsequences   Given the sequence , the following are subsequences.               itself.   "
},
{
  "id": "example-15",
  "level": "2",
  "url": "IVTandEVT-BWT.html#example-15",
  "type": "Example",
  "number": "10.3.4",
  "title": "",
  "body": " sequences not subsequences   The following are NOT subsequences.                  "
},
{
  "id": "problem-146",
  "level": "2",
  "url": "IVTandEVT-BWT.html#problem-146",
  "type": "Problem",
  "number": "10.3.5",
  "title": "",
  "body": "   sequences all subsequences of a convergent sequence converge Suppose . Prove that for any subsequence of .    First prove that .   "
},
{
  "id": "BolzanoWeierstrass",
  "level": "2",
  "url": "IVTandEVT-BWT.html#BolzanoWeierstrass",
  "type": "Theorem",
  "number": "10.3.6",
  "title": "",
  "body": "   The Bolzano-Weierstrass Theorem    Bolzano-Weierstrass Theorem Let be a sequence of real numbers such that ,  . Then there exists and a subsequence , such that .   "
},
{
  "id": "proof-24",
  "level": "2",
  "url": "IVTandEVT-BWT.html#proof-24",
  "type": "Proof",
  "number": "10.3.1",
  "title": "Sketch of a Proof of the Bolzano-Weierstrass Theorem.",
  "body": " Sketch of a Proof of the Bolzano-Weierstrass Theorem  Suppose we have our sequence such that ,  . To find our for the subsequence to converge to we will use the NIP. Since we are already using as our original sequence, we will need to use different letters in setting ourselves up for the NIP. With this in mind, let and , and notice that for infinitely many . (This is, in fact true for all , but you'll see why we said it the way we did.) Let be the midpoint of and notice that either for infinitely many or for infinitely many . If for infinitely many , then we relabel and . If for infinitely many , then relabel and . In either case, we get , , and for infinitely many .  Now we consider the interval and let be the midpoint of . Since for infinitely many , then either for infinitely many or for infinitely many . If for infinitely many , then we relabel and . If for infinitely many , then we relabel and . In either case, we get , , and for infinitely many .  If we continue in this manner, we will produce two sequences and with the following properties:                        For each , for infinitely many      By properties 1-5 and the NIP, there exists a unique such that , for all . In particular, .  We have our . Now we need to construct a subsequence converging to it. Since for infinitely many , choose an integer such that . Since for infinitely many , choose an integer such that . (Notice that to make a subsequence it is crucial that , and this is why we needed to insist that for infinitely many .) Continuing in this manner, we should be able to build a subsequence that will converge to . You can supply the details in the following problem.  "
},
{
  "id": "problem-147",
  "level": "2",
  "url": "IVTandEVT-BWT.html#problem-147",
  "type": "Problem",
  "number": "10.3.7",
  "title": "",
  "body": "   Bolzano-Weierstrass Theorem (BWT) Turn the ideas of the above outline into a formal proof of the Bolzano-Weierstrass Theorem.   "
},
{
  "id": "problem-148",
  "level": "2",
  "url": "IVTandEVT-BWT.html#problem-148",
  "type": "Problem",
  "number": "10.3.8",
  "title": "",
  "body": "   Bolzano-Weierstrass Theorem (BWT) implies that a continuous functions on a closed set is bounded  continuous functions on a closed set, and the Bolzano-Weierstrass Theorem  continuity Bolzano-Weierstrass Theorem implies a continuous function on a closed set is bounded Use the Bolzano-Weierstrass Theorem to complete the proof of Theorem .   "
},
{
  "id": "IVTandEVT-SupremumAndEVT",
  "level": "1",
  "url": "IVTandEVT-SupremumAndEVT.html",
  "type": "Section",
  "number": "10.4",
  "title": "The Supremum and the Extreme Value Theorem",
  "body": " The Supremum and the Extreme Value Theorem   Theorem says that a continuous function on a closed, bounded interval must be bounded. Boundedness, in and of itself, does not ensure the existence of a maximum or minimum. We must also have a closed, bounded interval. To illustrate this, consider the continuous function tan defined on the (unbounded) interval .   This function is bounded between and , but it does not attain a maximum or minimum as the lines are horizontal asymptotes. Notice that if we restricted the domain to a closed, bounded interval then it would attain its extreme values on that interval (as guaranteed by the EVT ).  To find a maximum we need to find the smallest possible upper bound for the range of the function. This prompts the following definitions.     Upper Bound Let and let be a real number. We say that is an upper bound of provided for all .    For example, if , then any with would be an upper bound of . Furthermore, the fact that is not an element of the set is immaterial. Indeed, if , then any with would still be an upper bound of . Notice that, in general, if a set has an upper bound, then it has infinitely many since any number larger than that upper bound would also be an upper bound. However, there is something special about the smallest upper bound.  Least Upper Bound Property ( LUBP )  Least Upper Bound Property (LUBP)   Let and let be a real number. We say that is the least upper bound of provided      for all . ( is an upper bound of )    If for all , then . (Any upper bound of is at least as big as .)     In this case, we also say that  is the supremum of and we write .    Notice that the definition really says that is the smallest upper bound of . Also notice that the second condition can be replaced by its contrapositive so we can say that if and only if          If then there exists such that .     The second condition says that if a number is less than , then it can't be an upper bound, so that really is the smallest upper bound.  Also notice that the supremum of the set may or may not be in the set itself. This is illustrated by the examples above as in both cases, and . Obviously, a set which is not bounded above such as cannot have a supremum. However, for non-empty sets which are bounded above, we have the following.  The Least Upper Bound Property ( LUBP )  Least Upper Bound Property (LUBP)   Let be a non-empty subset of which is bounded above. Then has a supremum.     Sketch of Proof  Since , then there exists . Since is bounded above then it has an upper bound, say . We will set ourselves up to use the Nested Interval Property. With this in mind, let and and notice that  such that (namely, itself) and , . You probably guessed what's coming next: let be the midpoint of . Notice that either or  such that . In the former case, we relabel, letting and . In the latter case, we let and . In either case, we end up with , , and  such that and , . If we continue this process, we end up with two sequences, and , satisfying the following conditions:               ,             such that and , ,     By properties 1-5 and the NIP there exists such that . We will leave it to you to use property 5 to show that .      Nested Interval Property (NIP) implies the LUBP Complete the above ideas to provide a formal proof of Theorem .    Notice that we really used the fact that was non-empty and bounded above in the proof of Theorem . This makes sense, since a set which is not bounded above cannot possibly have a least upper bound. In fact, any real number is an upper bound of the empty set so that the empty set would not have a least upper bound.  The following corollary to Theorem can be very useful.    Let be a bounded, increasing sequence of real numbers. That is, . Then converges to some real number .       sequences bounded and non-decreasing Prove Corollary .    Let . To show that , let Note that is not an upper bound. You take it from here!        value of Consider the following curious expression . We will use Corollary to show that this actually converges to some real number. After we know it converges we can actually compute what it is. Of course to do so, we need to define things a bit more precisely. With this in mind consider the following sequence defined as follows:  .   Use induction to show that for .    Use the result from part (a) to show that for .    From Corollary , we have that must converge to some number . Use the fact that must converge to as well to compute what must be.       We now have all the tools we need to tackle the Extreme Value Theorem.     Extreme Value Theorem ( EVT )    Extreme Value Theorem (EVT) Suppose is continuous on . Then there exists such that , for all .     Sketch of Proof  We will first show that attains its maximum. To this end, recall that Theorem tells us that is a bounded set. By the LUBP, must have a least upper bound which we will label , so that . This says that ,for all . All we need to do now is find a with . With this in mind, notice that since , then for any positive integer , is not an upper bound of . Thus there exists with . Now, by the Bolzano-Weierstrass Theorem, has a convergent subsequence converging to some . Using the continuity of at , you should be able to show that . To find the minimum of , find the maximum of .      Extreme Value Theorem (EVT) Formalize the above ideas into a proof of Theorem .    Notice that we used the NIP to prove both the Bolzano-Weierstrass Theorem and the LUBP. This is really unavoidable, as it turns out that all of those statements are equivalent in the sense that any one of them can be taken as the completeness axiom for the real number system and the others proved as theorems. This is not uncommon in mathematics, as people tend to gravitate toward ideas that suit the particular problem they are working on. In this case, people realized at some point that they needed some sort of completeness property for the real number system to prove various theorems. Each individual's formulation of completeness fit in with his understanding of the problem at hand. Only in hindsight do we see that they were really talking about the same concept: the completeness of the real number system. In point of fact, most modern textbooks use the LUBP as the axiom of completeness and prove all other formulations as theorems. We will finish this section by showing that either the Bolzano-Weierstrass Theorem or the LUBP can be used to prove the NIP. This says that they are all equivalent and that any one of them could be taken as the completeness axiom.     Bolzano-Weierstrass Theorem (BWT) implies the NIP Use the Bolzano-Weierstrass Theorem to prove the NIP. That is, assume that the Bolzano-Weierstrass Theorem holds and suppose we have two sequences of real numbers, and , satisfying:                   .     Prove that there is a real number such that , for all .    Since the Bolzano-Weierstrass Theorem and the Nested Interval Property are equivalent, it follows that the Bolzano-Weierstrass Theorem will not work for the rational number system.     sequences find a bounded sequence of rational numbers such that no subsequence converges to a rational number Find a bounded sequence of rational numbers such that no subsequence of it converges to a rational number.       Least Upper Bound Property (LUBP) implies the Nested Interval Property (NIP) Use the Least Upper Bound Property to prove the Nested Interval Property. That is, assume that every non-empty subset of the real numbers which is bounded above has a least upper bound; and suppose that we have two sequences of real numbers and , satisfying:                   .     Prove that there exists a real number such that , for all n. (Again, the will, of necessity, be unique, but don't worry about that.)     Corollary might work well here.       Least Upper Bound Property (LUBP) doesn't hold in Since the LUBP is equivalent to the NIP it does not hold for the rational number system. Demonstrate this by finding a non-empty set of rational numbers which is bounded above, but whose supremum is an irrational number.    We have the machinery in place to clean up a matter that was introduced in Chapter . If you recall (or look back) we introduced the Archimedean Property of the real number system. This property says that given any two positive real numbers , there exists a positive integer with . As we mentioned in Chapter , this was taken to be intuitively obvious. The analogy we used there was to emptying an ocean with a teaspoon provided we are willing to use it enough times . The completeness of the real number system allows us to prove it as a formal theorem.   Archimedean Property    Archimedean Property of   Given any positive real numbers and , there exists a positive integer , such that .     Least Upper Bound Property (LUBP) implies the Archimedean Property  Archimedean Property and LUBP   Prove Theorem .    Assume that there are positive real numbers and , such that  . Then would be bounded above by . Let and consider .    Given what we've been doing, one might ask if the Archimedean Property is equivalent to the LUBP (and thus could be taken as an axiom). The answer lies in the following problem.     Archimedean Property and  Does satisfy the Archimedean Property and what does this have to do with the question of taking the Archimedean Property as an axiom of completeness?    "
},
{
  "id": "p-1048",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#p-1048",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "EVT "
},
{
  "id": "def_UpperBound",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#def_UpperBound",
  "type": "Definition",
  "number": "10.4.1",
  "title": "",
  "body": "   Upper Bound Let and let be a real number. We say that is an upper bound of provided for all .   "
},
{
  "id": "def_LeastUpperBound",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#def_LeastUpperBound",
  "type": "Definition",
  "number": "10.4.2",
  "title": "Least Upper Bound Property (<dfn class=\"terminology\">LUBP<\/dfn>).",
  "body": "Least Upper Bound Property ( LUBP )  Least Upper Bound Property (LUBP)   Let and let be a real number. We say that is the least upper bound of provided      for all . ( is an upper bound of )    If for all , then . (Any upper bound of is at least as big as .)     In this case, we also say that  is the supremum of and we write .   "
},
{
  "id": "thm_LUB",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#thm_LUB",
  "type": "Theorem",
  "number": "10.4.3",
  "title": "The Least Upper Bound Property (<dfn class=\"terminology\">LUBP<\/dfn>).",
  "body": "The Least Upper Bound Property ( LUBP )  Least Upper Bound Property (LUBP)   Let be a non-empty subset of which is bounded above. Then has a supremum.   "
},
{
  "id": "proof-25",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#proof-25",
  "type": "Proof",
  "number": "10.4.1",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  Since , then there exists . Since is bounded above then it has an upper bound, say . We will set ourselves up to use the Nested Interval Property. With this in mind, let and and notice that  such that (namely, itself) and , . You probably guessed what's coming next: let be the midpoint of . Notice that either or  such that . In the former case, we relabel, letting and . In the latter case, we let and . In either case, we end up with , , and  such that and , . If we continue this process, we end up with two sequences, and , satisfying the following conditions:               ,             such that and , ,     By properties 1-5 and the NIP there exists such that . We will leave it to you to use property 5 to show that .  "
},
{
  "id": "problem-149",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-149",
  "type": "Problem",
  "number": "10.4.4",
  "title": "",
  "body": "   Nested Interval Property (NIP) implies the LUBP Complete the above ideas to provide a formal proof of Theorem .   "
},
{
  "id": "cor_IncBoundedConverge",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#cor_IncBoundedConverge",
  "type": "Corollary",
  "number": "10.4.5",
  "title": "",
  "body": "  Let be a bounded, increasing sequence of real numbers. That is, . Then converges to some real number .   "
},
{
  "id": "problem-150",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-150",
  "type": "Problem",
  "number": "10.4.6",
  "title": "",
  "body": "   sequences bounded and non-decreasing Prove Corollary .    Let . To show that , let Note that is not an upper bound. You take it from here!   "
},
{
  "id": "problem-151",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-151",
  "type": "Problem",
  "number": "10.4.7",
  "title": "",
  "body": "    value of Consider the following curious expression . We will use Corollary to show that this actually converges to some real number. After we know it converges we can actually compute what it is. Of course to do so, we need to define things a bit more precisely. With this in mind consider the following sequence defined as follows:  .   Use induction to show that for .    Use the result from part (a) to show that for .    From Corollary , we have that must converge to some number . Use the fact that must converge to as well to compute what must be.      "
},
{
  "id": "thm_EVT",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#thm_EVT",
  "type": "Theorem",
  "number": "10.4.8",
  "title": "",
  "body": "   Extreme Value Theorem ( EVT )    Extreme Value Theorem (EVT) Suppose is continuous on . Then there exists such that , for all .   "
},
{
  "id": "proof-26",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#proof-26",
  "type": "Proof",
  "number": "10.4.2",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  We will first show that attains its maximum. To this end, recall that Theorem tells us that is a bounded set. By the LUBP, must have a least upper bound which we will label , so that . This says that ,for all . All we need to do now is find a with . With this in mind, notice that since , then for any positive integer , is not an upper bound of . Thus there exists with . Now, by the Bolzano-Weierstrass Theorem, has a convergent subsequence converging to some . Using the continuity of at , you should be able to show that . To find the minimum of , find the maximum of .  "
},
{
  "id": "problem-152",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-152",
  "type": "Problem",
  "number": "10.4.9",
  "title": "",
  "body": "   Extreme Value Theorem (EVT) Formalize the above ideas into a proof of Theorem .   "
},
{
  "id": "problem-153",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-153",
  "type": "Problem",
  "number": "10.4.10",
  "title": "",
  "body": "   Bolzano-Weierstrass Theorem (BWT) implies the NIP Use the Bolzano-Weierstrass Theorem to prove the NIP. That is, assume that the Bolzano-Weierstrass Theorem holds and suppose we have two sequences of real numbers, and , satisfying:                   .     Prove that there is a real number such that , for all .   "
},
{
  "id": "problem-154",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-154",
  "type": "Problem",
  "number": "10.4.11",
  "title": "",
  "body": "   sequences find a bounded sequence of rational numbers such that no subsequence converges to a rational number Find a bounded sequence of rational numbers such that no subsequence of it converges to a rational number.   "
},
{
  "id": "problem-155",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-155",
  "type": "Problem",
  "number": "10.4.12",
  "title": "",
  "body": "   Least Upper Bound Property (LUBP) implies the Nested Interval Property (NIP) Use the Least Upper Bound Property to prove the Nested Interval Property. That is, assume that every non-empty subset of the real numbers which is bounded above has a least upper bound; and suppose that we have two sequences of real numbers and , satisfying:                   .     Prove that there exists a real number such that , for all n. (Again, the will, of necessity, be unique, but don't worry about that.)     Corollary might work well here.   "
},
{
  "id": "problem-156",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-156",
  "type": "Problem",
  "number": "10.4.13",
  "title": "",
  "body": "   Least Upper Bound Property (LUBP) doesn't hold in Since the LUBP is equivalent to the NIP it does not hold for the rational number system. Demonstrate this by finding a non-empty set of rational numbers which is bounded above, but whose supremum is an irrational number.   "
},
{
  "id": "thm_ArchmedeanProperty",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#thm_ArchmedeanProperty",
  "type": "Theorem",
  "number": "10.4.14",
  "title": "",
  "body": " Archimedean Property    Archimedean Property of   Given any positive real numbers and , there exists a positive integer , such that .   "
},
{
  "id": "problem-157",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-157",
  "type": "Problem",
  "number": "10.4.15",
  "title": "",
  "body": " Least Upper Bound Property (LUBP) implies the Archimedean Property  Archimedean Property and LUBP   Prove Theorem .    Assume that there are positive real numbers and , such that  . Then would be bounded above by . Let and consider .   "
},
{
  "id": "problem-158",
  "level": "2",
  "url": "IVTandEVT-SupremumAndEVT.html#problem-158",
  "type": "Problem",
  "number": "10.4.16",
  "title": "",
  "body": "   Archimedean Property and  Does satisfy the Archimedean Property and what does this have to do with the question of taking the Archimedean Property as an axiom of completeness?   "
},
{
  "id": "IVTandEVT-AddProb",
  "level": "1",
  "url": "IVTandEVT-AddProb.html",
  "type": "Section",
  "number": "10.5",
  "title": "Additional Problems",
  "body": " Additional Problems     Greatest Lower Bound Property (GLBP) definition of Mimic the definitions of an upper bound of a set and the least upper bound (supremum) of a set to give definitions for a lower bound of a set and the greatest lower bound (infimum) of a set.   Note : The infimum of a set is denoted by .       Least Upper Bound Property (LUBP) identifying suprema and infima Find the least upper bound (supremum) and greatest lower bound (infimum) of the following sets of real numbers, if they exist. (If one does not exist then say so.)         is rational and                    The empty set           Least Upper Bound Property (LUBP)  is an upper bound of if and only if is a lower bound of Let and let .   Prove that is an upper bound of if and only if is a lower bound of .    Prove that if and only if .       "
},
{
  "id": "problem-159",
  "level": "2",
  "url": "IVTandEVT-AddProb.html#problem-159",
  "type": "Problem",
  "number": "10.5.1",
  "title": "",
  "body": "   Greatest Lower Bound Property (GLBP) definition of Mimic the definitions of an upper bound of a set and the least upper bound (supremum) of a set to give definitions for a lower bound of a set and the greatest lower bound (infimum) of a set.   Note : The infimum of a set is denoted by .   "
},
{
  "id": "problem-160",
  "level": "2",
  "url": "IVTandEVT-AddProb.html#problem-160",
  "type": "Problem",
  "number": "10.5.2",
  "title": "",
  "body": "   Least Upper Bound Property (LUBP) identifying suprema and infima Find the least upper bound (supremum) and greatest lower bound (infimum) of the following sets of real numbers, if they exist. (If one does not exist then say so.)         is rational and                    The empty set       "
},
{
  "id": "problem-161",
  "level": "2",
  "url": "IVTandEVT-AddProb.html#problem-161",
  "type": "Problem",
  "number": "10.5.3",
  "title": "",
  "body": "   Least Upper Bound Property (LUBP)  is an upper bound of if and only if is a lower bound of Let and let .   Prove that is an upper bound of if and only if is a lower bound of .    Prove that if and only if .      "
},
{
  "id": "PowerSeriesRedux-UnifConv",
  "level": "1",
  "url": "PowerSeriesRedux-UnifConv.html",
  "type": "Section",
  "number": "11.1",
  "title": "Uniform Convergence",
  "body": " Uniform Convergence  We have developed precise analytic definitions of the convergence of a sequence and continuity of a function and we have used these to prove the EVT and IVT for a continuous function. We will now draw our attention back to the question that originally motivated these definitions, Why are Taylor series well behaved, but Fourier series are not necessarily? More precisely, we mentioned that whenever a power series converges then whatever it converged to was continuous. Moreover, if we differentiate or integrate these series term by term then the resulting series will converge to the derivative or integral of the original series. This was not always the case for Fourier series. For example consider the function .  We have seen that the graph of is given by   If we consider the following sequence of functions we see the sequence of continuous functions converges to the non-continuous function for each real number . This didn't happen with Taylor series. The partial sums for a Taylor series were polynomials and hence continuous but what they converged to was continuous as well.  The difficulty is quite delicate and it took mathematicians a while to determine the problem. There are two very subtly different ways that a sequence of functions can converge: pointwise or uniformly. This distinction was touched upon by Niels Henrik Abel (1802-1829) in 1826 while studying the domain of convergence of a power series. However, the necessary formal definitions were not made explicit until Weierstrass did it in his 1841 paper Zur Theorie der Potenzreihen (On the Theory of Power Series) . This was published in his collected works in 1894.  It will be instructive to take a look at an argument that doesn't quite work before looking at the formal definitions we will need. In 1821 Augustin Cauchy proved that the infinite sum of continuous functions is continuous. Of course, it is obvious (to us) that this is not true because we've seen several counterexamples. But Cauchy, who was a first rate mathematician was so sure of the correctness of his argument that he included it in his textbook on analysis, Cours d'analyse (1821).     Cauchy, Augustin Cauchy's flawed proof that the limit of continuous functions is continuous  continuity Cauchy's flawed proof that the limit of continuous functions is continuous Find the flaw in the following proof that is also continuous at .  Suppose are all continuous at and that . Let . Since is continuous at we can choose such that if then . Let . If then .  Thus is continuous at .       convergence of a series pointwise Let be a subset of the real number system and let be a sequence of functions defined on . Let be a function defined on as well. We say that  converges to pointwise on provided that for all the sequence of real numbers converges to the number . In this case we write on .    Symbolically, we have such that .  This is the type of convergence we have been observing to this point. By contrast we have the following new definition.     uniform convergence Let be a subset of the real number system and let be a sequence of functions defined on . Let be a function defined on as well. We say that  converges to uniformly on provided such that .  In this case we write on .    The difference between these two definitions is subtle. In pointwise convergence, we are given a fixed and an . Then the task is to find an that works for that particular and . In uniform convergence, one is given and must find a single that works for that particular but also simultaneously (uniformly) for all . Clearly uniform convergence implies pointwise convergence as an which works uniformly for all works for each individual also. However the reverse is not true. This will become evident, but first consider the following example.   uniform convergence  converges uniformly on    Let and consider the sequence of functions defined on by . Use the definition to show that on .     .    Uniform convergence is not only dependent on the sequence of functions but also on the set . For example, the sequence of Problem does not converge uniformly on . We could use the negation of the definition to prove this, but instead, it will be a consequence of the following theorem.     uniform convergence continuous functions and  continuous functions uniform convergence and  continuous functions uniform limit of continuous functions is continuous Consider a sequence of functions which are all continuous on an interval . Suppose on . Then must be continuous on .     Sketch of Proof  Let and let . The idea is to use uniform convergence to replace with one of the known continuous functions . Specifically, by uncancelling, we can write   If we choose large enough, then we can make the first and last terms as small as we wish, noting that the uniform convergence makes the first term uniformly small for all . Once we have a specific then we can use the continuity of to find a such that the middle term is small whenever is within of .      uniform convergence continuous functions and Provide a formal proof of Theorem based on the above ideas.       converges pointwise on  pointwise convergence  converges pointwise on Consider the sequence of functions defined on by . Show that the sequence converges to the function pointwise on but not uniformly on .    Notice that for the Fourier series at the beginning of this chapter, the convergence cannot be uniform on as the function is not continuous. This never happens with a power series, since they converge to continuous functions whenever they converge. We will also see that uniform convergence is what allows us to integrate and differentiate a power series term by term.  "
},
{
  "id": "prob_Cauchy_s_incorrect_proof",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv.html#prob_Cauchy_s_incorrect_proof",
  "type": "Problem",
  "number": "11.1.1",
  "title": "",
  "body": "   Cauchy, Augustin Cauchy's flawed proof that the limit of continuous functions is continuous  continuity Cauchy's flawed proof that the limit of continuous functions is continuous Find the flaw in the following proof that is also continuous at .  Suppose are all continuous at and that . Let . Since is continuous at we can choose such that if then . Let . If then .  Thus is continuous at .   "
},
{
  "id": "def_PointwiseConvergence",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv.html#def_PointwiseConvergence",
  "type": "Definition",
  "number": "11.1.2",
  "title": "",
  "body": "   convergence of a series pointwise Let be a subset of the real number system and let be a sequence of functions defined on . Let be a function defined on as well. We say that  converges to pointwise on provided that for all the sequence of real numbers converges to the number . In this case we write on .   "
},
{
  "id": "def_UniformConvergence",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv.html#def_UniformConvergence",
  "type": "Definition",
  "number": "11.1.3",
  "title": "",
  "body": "   uniform convergence Let be a subset of the real number system and let be a sequence of functions defined on . Let be a function defined on as well. We say that  converges to uniformly on provided such that .  In this case we write on .   "
},
{
  "id": "prob_uniform_convergence",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv.html#prob_uniform_convergence",
  "type": "Problem",
  "number": "11.1.4",
  "title": "",
  "body": " uniform convergence  converges uniformly on    Let and consider the sequence of functions defined on by . Use the definition to show that on .     .   "
},
{
  "id": "thm_UnifConv-_Continuity",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv.html#thm_UnifConv-_Continuity",
  "type": "Theorem",
  "number": "11.1.5",
  "title": "",
  "body": "   uniform convergence continuous functions and  continuous functions uniform convergence and  continuous functions uniform limit of continuous functions is continuous Consider a sequence of functions which are all continuous on an interval . Suppose on . Then must be continuous on .   "
},
{
  "id": "proof-27",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv.html#proof-27",
  "type": "Proof",
  "number": "11.1.1",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  Let and let . The idea is to use uniform convergence to replace with one of the known continuous functions . Specifically, by uncancelling, we can write   If we choose large enough, then we can make the first and last terms as small as we wish, noting that the uniform convergence makes the first term uniformly small for all . Once we have a specific then we can use the continuity of to find a such that the middle term is small whenever is within of .  "
},
{
  "id": "problem-164",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv.html#problem-164",
  "type": "Problem",
  "number": "11.1.6",
  "title": "",
  "body": "   uniform convergence continuous functions and Provide a formal proof of Theorem based on the above ideas.   "
},
{
  "id": "problem-165",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv.html#problem-165",
  "type": "Problem",
  "number": "11.1.7",
  "title": "",
  "body": "   converges pointwise on  pointwise convergence  converges pointwise on Consider the sequence of functions defined on by . Show that the sequence converges to the function pointwise on but not uniformly on .   "
},
{
  "id": "PowerSeriesRedux-UnifConv-IntsAndDerivs",
  "level": "1",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html",
  "type": "Section",
  "number": "11.2",
  "title": "Uniform Convergence: Integrals and Derivatives",
  "body": " Uniform Convergence: Integrals and Derivatives   We saw in the previous section that if is a sequence of continuous functions which converges uniformly to on an interval, then must be continuous on the interval as well. This was not necessarily true if the convergence was only pointwise, as we saw a sequence of continuous functions defined on converging pointwise to a Fourier series that was not continuous on the real line. Uniform convergence guarantees some other nice properties as well.     uniform convergence integration and Suppose and are integrable and on . Then        uniform convergence integration and Prove Theorem .    For we need to make for all .    Notice that this theorem is not true if the convergence is only pointwise, as illustrated by the following.     convergence pointwise convergence  convergence uniform convergence  convergence pointwise vs. uniform convergence Consider the sequence of functions given by .   Show that on but     Can the convergence be uniform? Explain.       Applying this result to power series we have the following.   Notice that we must explicitly assume uniform convergence. This is because we have not yet proved that power series actually do converge uniformly.     If converges uniformly to on an interval containing and then .       power series term by term integral of Prove Corollary .    Remember that     Surprisingly, the issue of term-by-term differentiation depends not on the uniform convergence of but on the uniform convergence of . More precisely, we have the following result.   pointwise convergence derivative and  differentiation of the pointwise limit of functions   Suppose for every  is differentiable, is continuous, and on an interval, . Then is differentiable and on .     sequences differentiation of a sequence of functions  differentiation differentiation of a sequence of functions   Prove Theorem .    Let be an arbitrary fixed point in and let . By the Fundamental Theorem of Calculus, we have . Take the limit of both sides and differentiate with respect to .    As before, applying this to power series gives the following result.    If converges pointwise to on an interval containing and and converges uniformly on an interval containing and then .       power series term by term derivative of  differentiation term by term differentiation of power series Prove Corollary .    The above results say that a power series can be differentiated and integrated term-by-term as long as the convergence is uniform. Fortunately it is, in general, true that when a power series converges the convergence of it and its integrated and differentiated series is also uniform (almost).  However we do not yet have all of the tools necessary to see this. To build these tools requires that we return briefly to our study, begun in Chapter , of the convergence of sequences.    Cauchy Sequences  Knowing that a sequence or a series converges and knowing what it converges to are typically two different matters. For example, we know that and both converge. The first converges to which has meaning in other contexts. We don't know what the second one converges to, other than to say it converges to . In fact, that question might not have much meaning without some other context in which arises naturally. Be that as it may, we need to look at the convergence of a series (or a sequence for that matter) without necessarily knowing what it might converge to. We make the following definition.     sequences Cauchy sequences Let be a sequence of real numbers. We say that is a Cauchy sequence if for any there exists a real number such that if then .    Notice that this definition says that the terms in a Cauchy sequence get arbitrarily close to each other and that there is no reference to getting close to any particular fixed real number. Furthermore, you have already seen lots of examples of Cauchy sequences as illustrated by the following result.     sequences convergence  convergence of a sequence implies Cauchy sequence Suppose is a sequence of real numbers which converges to . Then is a Cauchy sequence.    Intuitively, this result makes sense. If the terms in a sequence are getting arbitrarily close to then they should be getting arbitrarily close to each other.  But the converse isn't nearly as clear. In fact, it isn't true in the rational numbers.  This is the basis of the proof.   sequences convergence  convergence of a sequence implies Cauchy sequence   Prove Theorem .     .    So any convergent sequence is automatically Cauchy. For the real number system, the converse is also true and, in fact, is equivalent to any of our completeness axioms: the NIP, the Bolzano-Weierstrass Theorem, or the LUB Property. Thus, this could have been taken as our completeness axiom and we could have used it to prove the others. One of the most convenient ways to prove this converse is to use the Bolzano-Weierstrass Theorem. To do that, we must first show that a Cauchy sequence must be bounded. This result is reminiscent of the fact that a convergent sequence is bounded ( Lemma of Chapter ) and the proof is very similar.    Suppose  is a Cauchy sequence. Then there exists such that for all .     sequences Cauchy sequences every Cauchy sequence is bounded   Prove Lemma .    This is similar to problem of Chapter . There exists such that if then . Choose a fixed and let .       Cauchy sequences converge    sequences Cauchy sequences convergence of Suppose is a Cauchy sequence of real numbers. There exists a real number such that .     Sketch of Proof  We know that  is bounded, so by the Bolzano-Weierstrass Theorem, it has a convergent subsequence converging to some real number . We have . If we choose and large enough, we should be able to make each term arbitrarily small.      sequences Cauchy sequences convergence of Provide a formal proof of Theorem .    From Theorem we see that every Cauchy sequence converges in . Moreover the proof of this fact depends on the Bolzano-Weierstrass Theorem which, as we have seen, is equivalent to our completeness axiom, the Nested Interval Property. What this means is that if there is a Cauchy sequence which does not converge then the NIP is not true. A natural question to ask is if every Cauchy sequence converges does the NIP follow? That is, is the convergence of Cauchy sequences also equivalent to our completeness axiom? The following theorem shows that the answer is yes.     sequences Cauchy sequences convergence of is equivalent to the NIP Suppose every Cauchy sequence converges. Then the Nested Interval Property is true.     sequences Cauchy sequences convergence of is equivalent to the NIP   Prove Theorem .    If we start with two sequences and , satisfying all of the conditions of the NIP, you should be able to show that these are both Cauchy sequences.     Problems and tell us that the following are equivalent: the Nested Interval Property, the Bolzano-Weierstrass Theorem, the Least Upper Bound Property, and the convergence of Cauchy sequences. Thus any one of these could have been taken as the completeness axiom of the real number system and then used to prove the each of the others as a theorem according to the following dependency graph:   Since we can get from any node on the graph to any other, simply by following the implications (indicated with arrows), any one of these statements is logically equivalent to each of the others.     sequences Cauchy sequences don't always converge in Since the convergence of Cauchy sequences can be taken as the completeness axiom for the real number system, it does not hold for the rational number system. Give an example of a Cauchy sequence of rational numbers which does not converge to a rational number.    If we apply the above ideas to series we obtain the following important result, which will provide the basis for our investigation of power series.  Cauchy Criterion  series Cauchy sequences Cauchy Criterion   The series converges if and only if  ,  such that if then .       series Cauchy Criterion Prove the Cauchy criterion.    At this point several of the tests for convergence that you probably learned in calculus are easily proved. For example:     The th Term Test    series th term test  divergence of a series th term test Show that if converges then .     The Strong Cauchy Criterion    series Cauchy Criterion Strong Cauchy criterion Show that converges if and only if .    The hardest part of this problem is recognizing that it is really about the limit of a sequence as in Chapter .    You may also recall the Comparison Test from studying series in calculus: suppose , if converges then converges. This result follows from the fact that the partial sums of form an increasing sequence which is bounded above by . (See Corollary of Chapter .) The Cauchy Criterion allows us to extend this to the case where the terms could be negative as well. This can be seen in the following theorem.     Comparison Test    series Comparison Test Suppose for all . If converges then also converges.     series the Comparison Test  convergence of a series Comparison Test   Prove Theorem .    Use the Cauchy criterion with the fact that .    The following definition is of marked importance in the study of series.     Absolute Convergence    convergence of a series absolute Given a series , the series is called the absolute series of and if converges then we say that  converges absolutely.     The significance of this definition comes from the following result.    If converges absolutely, then converges.       convergence of a series absolute convergence implies convergence Show that Corollary is a direct consequence of Theorem .       series absolute convergence of vs. the absolute value of a series If , then does it follow that ? Justify your answer. What can be said?    The converse of Corollary is not true as evidenced by the series . As we noted in Chapter , this series converges to ln . However, its absolute series is the Harmonic series Harmonic Series Series which diverges. Any such series which converges, but not absolutely, is said to converge conditionally . Recall also that in Chapter , we showed that we could rearrange the terms of the series to make it converge to any number we wished. We noted further that all rearrangements of the series converged to the same value. The difference between the two series is that the latter converges absolutely whereas the former does not. Specifically, we have the following result.     series rearrangements  series absolute convergence of rearrangements Suppose converges absolutely and let . Then any rearrangement of must converge to .     Sketch of Proof  We will first show that this result is true in the case where . If represents a rearrangement of , then notice that the sequence of partial sums is an increasing sequence which is bounded by . By Corollary of Chapter , this sequence must converge to some number and . Furthermore is also a rearrangement of . Thus the result holds for this special case. (Why?) For the general case, notice that and that and are both convergent series with nonnegative terms. By the special case  and  .      series  absolute convergence of rearrangements Fill in the details and provide a formal proof of Theorem .     "
},
{
  "id": "th_UniformIntegralConvergence",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#th_UniformIntegralConvergence",
  "type": "Theorem",
  "number": "11.2.1",
  "title": "",
  "body": "   uniform convergence integration and Suppose and are integrable and on . Then    "
},
{
  "id": "problem-166",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-166",
  "type": "Problem",
  "number": "11.2.2",
  "title": "",
  "body": "   uniform convergence integration and Prove Theorem .    For we need to make for all .   "
},
{
  "id": "problem-167",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-167",
  "type": "Problem",
  "number": "11.2.3",
  "title": "",
  "body": "   convergence pointwise convergence  convergence uniform convergence  convergence pointwise vs. uniform convergence Consider the sequence of functions given by .   Show that on but     Can the convergence be uniform? Explain.      "
},
{
  "id": "cor_IntConvUni",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#cor_IntConvUni",
  "type": "Corollary",
  "number": "11.2.4",
  "title": "",
  "body": "  If converges uniformly to on an interval containing and then .   "
},
{
  "id": "problem-168",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-168",
  "type": "Problem",
  "number": "11.2.5",
  "title": "",
  "body": "   power series term by term integral of Prove Corollary .    Remember that    "
},
{
  "id": "thm_UniformDerivativeConvergence",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#thm_UniformDerivativeConvergence",
  "type": "Theorem",
  "number": "11.2.6",
  "title": "",
  "body": " pointwise convergence derivative and  differentiation of the pointwise limit of functions   Suppose for every  is differentiable, is continuous, and on an interval, . Then is differentiable and on .   "
},
{
  "id": "problem-169",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-169",
  "type": "Problem",
  "number": "11.2.7",
  "title": "",
  "body": " sequences differentiation of a sequence of functions  differentiation differentiation of a sequence of functions   Prove Theorem .    Let be an arbitrary fixed point in and let . By the Fundamental Theorem of Calculus, we have . Take the limit of both sides and differentiate with respect to .   "
},
{
  "id": "cor_UniformConvergenceDerivative",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#cor_UniformConvergenceDerivative",
  "type": "Corollary",
  "number": "11.2.8",
  "title": "",
  "body": "  If converges pointwise to on an interval containing and and converges uniformly on an interval containing and then .   "
},
{
  "id": "problem-170",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-170",
  "type": "Problem",
  "number": "11.2.9",
  "title": "",
  "body": "   power series term by term derivative of  differentiation term by term differentiation of power series Prove Corollary .   "
},
{
  "id": "def_CauchySequence",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#def_CauchySequence",
  "type": "Definition",
  "number": "11.2.10",
  "title": "",
  "body": "   sequences Cauchy sequences Let be a sequence of real numbers. We say that is a Cauchy sequence if for any there exists a real number such that if then .   "
},
{
  "id": "thm_Converge-_Cauchy",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#thm_Converge-_Cauchy",
  "type": "Theorem",
  "number": "11.2.11",
  "title": "",
  "body": "   sequences convergence  convergence of a sequence implies Cauchy sequence Suppose is a sequence of real numbers which converges to . Then is a Cauchy sequence.   "
},
{
  "id": "problem-171",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-171",
  "type": "Problem",
  "number": "11.2.12",
  "title": "",
  "body": " sequences convergence  convergence of a sequence implies Cauchy sequence   Prove Theorem .     .   "
},
{
  "id": "lemma_Cauchy-_Bounded",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#lemma_Cauchy-_Bounded",
  "type": "Lemma",
  "number": "11.2.13",
  "title": "",
  "body": "  Suppose  is a Cauchy sequence. Then there exists such that for all .   "
},
{
  "id": "problem-172",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-172",
  "type": "Problem",
  "number": "11.2.14",
  "title": "",
  "body": " sequences Cauchy sequences every Cauchy sequence is bounded   Prove Lemma .    This is similar to problem of Chapter . There exists such that if then . Choose a fixed and let .   "
},
{
  "id": "thm_Cauchy-_Converge",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#thm_Cauchy-_Converge",
  "type": "Theorem",
  "number": "11.2.15",
  "title": "",
  "body": "   Cauchy sequences converge    sequences Cauchy sequences convergence of Suppose is a Cauchy sequence of real numbers. There exists a real number such that .   "
},
{
  "id": "proof-28",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#proof-28",
  "type": "Proof",
  "number": "11.2.1.1",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  We know that  is bounded, so by the Bolzano-Weierstrass Theorem, it has a convergent subsequence converging to some real number . We have . If we choose and large enough, we should be able to make each term arbitrarily small.  "
},
{
  "id": "prob_Cauchy_sequences_Cauchy_implies_convergence",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#prob_Cauchy_sequences_Cauchy_implies_convergence",
  "type": "Problem",
  "number": "11.2.16",
  "title": "",
  "body": "   sequences Cauchy sequences convergence of Provide a formal proof of Theorem .   "
},
{
  "id": "thm_ConvCauchyEquivNIP",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#thm_ConvCauchyEquivNIP",
  "type": "Theorem",
  "number": "11.2.17",
  "title": "",
  "body": "   sequences Cauchy sequences convergence of is equivalent to the NIP Suppose every Cauchy sequence converges. Then the Nested Interval Property is true.   "
},
{
  "id": "prob_Cauchy_sequences_Cauchy_implies_NIP",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#prob_Cauchy_sequences_Cauchy_implies_NIP",
  "type": "Problem",
  "number": "11.2.18",
  "title": "",
  "body": " sequences Cauchy sequences convergence of is equivalent to the NIP   Prove Theorem .    If we start with two sequences and , satisfying all of the conditions of the NIP, you should be able to show that these are both Cauchy sequences.   "
},
{
  "id": "problem-175",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-175",
  "type": "Problem",
  "number": "11.2.19",
  "title": "",
  "body": "   sequences Cauchy sequences don't always converge in Since the convergence of Cauchy sequences can be taken as the completeness axiom for the real number system, it does not hold for the rational number system. Give an example of a Cauchy sequence of rational numbers which does not converge to a rational number.   "
},
{
  "id": "thm_CauchyCriterion",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#thm_CauchyCriterion",
  "type": "Theorem",
  "number": "11.2.20",
  "title": "Cauchy Criterion.",
  "body": "Cauchy Criterion  series Cauchy sequences Cauchy Criterion   The series converges if and only if  ,  such that if then .   "
},
{
  "id": "problem-176",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-176",
  "type": "Problem",
  "number": "11.2.21",
  "title": "",
  "body": "   series Cauchy Criterion Prove the Cauchy criterion.   "
},
{
  "id": "prob_NthTermTest",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#prob_NthTermTest",
  "type": "Problem",
  "number": "11.2.22",
  "title": "",
  "body": "   The th Term Test    series th term test  divergence of a series th term test Show that if converges then .   "
},
{
  "id": "problem-178",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-178",
  "type": "Problem",
  "number": "11.2.23",
  "title": "The Strong Cauchy Criterion.",
  "body": " The Strong Cauchy Criterion    series Cauchy Criterion Strong Cauchy criterion Show that converges if and only if .    The hardest part of this problem is recognizing that it is really about the limit of a sequence as in Chapter .   "
},
{
  "id": "thm_ComparisonTest",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#thm_ComparisonTest",
  "type": "Theorem",
  "number": "11.2.24",
  "title": "",
  "body": "   Comparison Test    series Comparison Test Suppose for all . If converges then also converges.   "
},
{
  "id": "problem-179",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-179",
  "type": "Problem",
  "number": "11.2.25",
  "title": "",
  "body": " series the Comparison Test  convergence of a series Comparison Test   Prove Theorem .    Use the Cauchy criterion with the fact that .   "
},
{
  "id": "AbsoluteConvergence",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#AbsoluteConvergence",
  "type": "Definition",
  "number": "11.2.26",
  "title": "",
  "body": "   Absolute Convergence    convergence of a series absolute Given a series , the series is called the absolute series of and if converges then we say that  converges absolutely.    "
},
{
  "id": "cor_AbsConv-_Conv",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#cor_AbsConv-_Conv",
  "type": "Corollary",
  "number": "11.2.27",
  "title": "",
  "body": "  If converges absolutely, then converges.   "
},
{
  "id": "problem-180",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-180",
  "type": "Problem",
  "number": "11.2.28",
  "title": "",
  "body": "   convergence of a series absolute convergence implies convergence Show that Corollary is a direct consequence of Theorem .   "
},
{
  "id": "problem-181",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-181",
  "type": "Problem",
  "number": "11.2.29",
  "title": "",
  "body": "   series absolute convergence of vs. the absolute value of a series If , then does it follow that ? Justify your answer. What can be said?   "
},
{
  "id": "thm_RearrageAbsConv",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#thm_RearrageAbsConv",
  "type": "Theorem",
  "number": "11.2.30",
  "title": "",
  "body": "   series rearrangements  series absolute convergence of rearrangements Suppose converges absolutely and let . Then any rearrangement of must converge to .   "
},
{
  "id": "proof-29",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#proof-29",
  "type": "Proof",
  "number": "11.2.1.2",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  We will first show that this result is true in the case where . If represents a rearrangement of , then notice that the sequence of partial sums is an increasing sequence which is bounded by . By Corollary of Chapter , this sequence must converge to some number and . Furthermore is also a rearrangement of . Thus the result holds for this special case. (Why?) For the general case, notice that and that and are both convergent series with nonnegative terms. By the special case  and  .  "
},
{
  "id": "problem-182",
  "level": "2",
  "url": "PowerSeriesRedux-UnifConv-IntsAndDerivs.html#problem-182",
  "type": "Problem",
  "number": "11.2.31",
  "title": "",
  "body": "   series  absolute convergence of rearrangements Fill in the details and provide a formal proof of Theorem .   "
},
{
  "id": "PowerSeriesRedux-RadiusOfConv",
  "level": "1",
  "url": "PowerSeriesRedux-RadiusOfConv.html",
  "type": "Section",
  "number": "11.3",
  "title": "Radius of Convergence of a Power Series",
  "body": " Radius of Convergence of a Power Series  We've developed enough machinery to look at the convergence of power series. The fundamental result is the following theorem due to Abel.     power series converge inside radius of convergence Suppose converges for some nonzero real number . Then converges absolutely for all such that .    To prove Theorem first note that by Problem , . Thus is a bounded sequence. Let be a bound: . Then .  We can now use the comparison test.     power series the radius of convergence  convergence the radius of convergence of a power series Prove Theorem .      Suppose diverges for some real number . Then diverges for all such that .       power series the radius of convergence  power series a power series diverges outside it's radius of convergence Prove Corollary .    As a result of Theorem and Corollary , we have the following: either converges absolutely for all or there exists some nonnegative real number such that converges absolutely when and diverges when . In the latter case, we call the radius of convergence of the power series . In the former case, we say that the radius of convergence of is . Though we can say that converges absolutely when , we cannot say that the convergence is uniform. However, we can come close. We can show that the convergence is uniform for . To see this we will use the following result     The Weierstrass- Test    Weierstrass- Test Let be a sequence of functions defined on and suppose that is a sequence of nonnegative real numbers such that .  If converges then converges uniformly on to some function (which we will denote by ).     Sketch of Proof  Since the crucial feature of the theorem is the function that our series converges to, our plan of attack is to first define and then show that our series, , converges to it uniformly.  First observe that for any , converges by the Comparison Test (in fact it converges absolutely) to some number we will denote by . This actually defines the function for all . It follows that converges pointwise to .  Next, let be given. Notice that since converges, say to , then there is a real number, , such that if , then .  You should be able to use this to show that if , then .      Weierstrass- Test Use the ideas above to provide a formal proof of Theorem .     uniform convergence Fourier Series and  Fourier Series uniform convergence and   Referring back to equation , show that the Fourier series converges uniformly on .    Does its differentiated series converge uniformly on Explain.     Weierstrass- Test  Weierstrass- Test drill problems   Observe that for all  . Identify which of the following series converges pointwise and which converges uniformly on the interval . In every case identify the limit function.                   Using the Weierstrass- test, we can prove the following result.     power series converge uniformly on their interval of convergence Suppose has radius of convergence (where could be as well). Let be any nonnegative real number with . Then converges uniformly on .     uniform convergence positive power series and   Prove Theorem .    We know that converges. This should be all set for the Weierstrass- test.    To finish the story on differentiating and integrating power series, all we need to do is show that the power series, its integrated series, and its differentiated series all have the same radius of convergence. You might not realize it, but we already know that the integrated series has a radius of convergence at least as big as the radius of convergence of the original series. Specifically, suppose has a radius of convergence and let . We know that converges uniformly on an interval containing and , and so by Corollary , . In other words, the integrated series converges for any with . This says that the radius of convergence of the integated series must be at least .  To show that the radii of convergence are the same, all we need to show is that the radius of convergence of the differentiated series is at least as big as as well. Indeed, since the differentiated series of the integrated series is the original, then this would say that the original series and the integrated series have the same radii of convergence. Putting the differentiated series into the role of the original series, the original series is now the integrated series and so these would have the same radii of convergence as well. With this in mind, we want to show that if , then converges. The strategy is to mimic what we did in Theorem , where we essentially compared our series with a converging geometric series. Only this time we need to start with the differentiated geometric series.   uniform convergence integration and  power series term by term integration of   Show that converges for .    We know that . Differentiate both sides and take the limit as approaches infinity.       power series term by term derivative of Suppose has a radius of convergence and let . Then converges.     power series term by term derivative of   Prove Theorem .    Let be a number with and consider . You should be able to use the Comparison Test and Problem .    "
},
{
  "id": "thm_RadiusOfConvergence",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#thm_RadiusOfConvergence",
  "type": "Theorem",
  "number": "11.3.1",
  "title": "",
  "body": "   power series converge inside radius of convergence Suppose converges for some nonzero real number . Then converges absolutely for all such that .   "
},
{
  "id": "problem-183",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#problem-183",
  "type": "Problem",
  "number": "11.3.2",
  "title": "",
  "body": "   power series the radius of convergence  convergence the radius of convergence of a power series Prove Theorem .   "
},
{
  "id": "cor_RadiusOfDivergence",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#cor_RadiusOfDivergence",
  "type": "Corollary",
  "number": "11.3.3",
  "title": "",
  "body": "  Suppose diverges for some real number . Then diverges for all such that .   "
},
{
  "id": "problem-184",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#problem-184",
  "type": "Problem",
  "number": "11.3.4",
  "title": "",
  "body": "   power series the radius of convergence  power series a power series diverges outside it's radius of convergence Prove Corollary .   "
},
{
  "id": "thm_WeierstrassM",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#thm_WeierstrassM",
  "type": "Theorem",
  "number": "11.3.5",
  "title": "",
  "body": "   The Weierstrass- Test    Weierstrass- Test Let be a sequence of functions defined on and suppose that is a sequence of nonnegative real numbers such that .  If converges then converges uniformly on to some function (which we will denote by ).   "
},
{
  "id": "proof-30",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#proof-30",
  "type": "Proof",
  "number": "11.3.1",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  Since the crucial feature of the theorem is the function that our series converges to, our plan of attack is to first define and then show that our series, , converges to it uniformly.  First observe that for any , converges by the Comparison Test (in fact it converges absolutely) to some number we will denote by . This actually defines the function for all . It follows that converges pointwise to .  Next, let be given. Notice that since converges, say to , then there is a real number, , such that if , then .  You should be able to use this to show that if , then .  "
},
{
  "id": "problem-185",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#problem-185",
  "type": "Problem",
  "number": "11.3.6",
  "title": "",
  "body": "   Weierstrass- Test Use the ideas above to provide a formal proof of Theorem .   "
},
{
  "id": "problem-186",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#problem-186",
  "type": "Problem",
  "number": "11.3.7",
  "title": "",
  "body": " uniform convergence Fourier Series and  Fourier Series uniform convergence and   Referring back to equation , show that the Fourier series converges uniformly on .    Does its differentiated series converge uniformly on Explain.   "
},
{
  "id": "problem-187",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#problem-187",
  "type": "Problem",
  "number": "11.3.8",
  "title": "",
  "body": " Weierstrass- Test  Weierstrass- Test drill problems   Observe that for all  . Identify which of the following series converges pointwise and which converges uniformly on the interval . In every case identify the limit function.                  "
},
{
  "id": "thm_PowerSeriesConvergeUniformly",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#thm_PowerSeriesConvergeUniformly",
  "type": "Theorem",
  "number": "11.3.9",
  "title": "",
  "body": "   power series converge uniformly on their interval of convergence Suppose has radius of convergence (where could be as well). Let be any nonnegative real number with . Then converges uniformly on .   "
},
{
  "id": "problem-188",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#problem-188",
  "type": "Problem",
  "number": "11.3.10",
  "title": "",
  "body": " uniform convergence positive power series and   Prove Theorem .    We know that converges. This should be all set for the Weierstrass- test.   "
},
{
  "id": "prob_PwrSeriesDiffConv",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#prob_PwrSeriesDiffConv",
  "type": "Problem",
  "number": "11.3.11",
  "title": "",
  "body": " uniform convergence integration and  power series term by term integration of   Show that converges for .    We know that . Differentiate both sides and take the limit as approaches infinity.   "
},
{
  "id": "thm_SeriesConv-_DerivConv",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#thm_SeriesConv-_DerivConv",
  "type": "Theorem",
  "number": "11.3.12",
  "title": "",
  "body": "   power series term by term derivative of Suppose has a radius of convergence and let . Then converges.   "
},
{
  "id": "problem-190",
  "level": "2",
  "url": "PowerSeriesRedux-RadiusOfConv.html#problem-190",
  "type": "Problem",
  "number": "11.3.13",
  "title": "",
  "body": " power series term by term derivative of   Prove Theorem .    Let be a number with and consider . You should be able to use the Comparison Test and Problem .   "
},
{
  "id": "PowerSeriesRedux-AbelsThm",
  "level": "1",
  "url": "PowerSeriesRedux-AbelsThm.html",
  "type": "Section",
  "number": "11.4",
  "title": "Boundary Issues and Abel’s Theorem",
  "body": " Boundary Issues and Abel's Theorem  Summarizing our results, we see that any power series has a radius of convergence such that converges absolutely when and diverges when . Furthermore, the convergence is uniform on any closed interval which tells us that whatever the power series converges to must be a continuous function on . Lastly, if for , then for and for .  Thus power series are very well behaved within their interval of convergence, and our cavalier approach from Chapter is justified, EXCEPT for one issue. If you go back to Problem of Chapter , you see that we used the geometric series to obtain the series, . We substituted into this to obtain . Unfortunately, our integration was only guaranteed on a closed subinterval of the interval where the convergence was uniform and we substituted in . We danced on the boundary in other places as well, including when we said that .  The fact is that for a power series with radius of convergence , we know what happens when and when . But we've never talked about what happens when . That is because there is no systematic approach to this boundary problem. For example, consider the three series .  They are all related in that we started with the geometric series and integrated twice, thus they all have radius of convergence equal to 1. Their behavior on the boundary, i.e., when , is another story. The first series diverges when , the third series converges when . The second series converges when and diverges when .  Even with the unpredictability of a power series at the endpoints of its interval of convergence, the Weierstrass- test does give us some hope of uniform convergence.   power series Weierstrass- Test and  power series converge uniformly inside their radius of convergence   Suppose the power series has radius of convergence and the series converges absolutely. Then converges uniformly on .    For , .    Unfortunately, this result doesn't apply to the integrals we mentioned as the convergence at the endpoints is not absolute. Nonetheless, the integrations we performed in Chapter are still legitimate. This is due to the following theorem by Abel which extends uniform convergence to the endpoints of the interval of convergence even if the convergence at an endpoint is only conditional. Abel did not use the term uniform convergence, as it hadn't been defined yet, but the ideas involved are his.     Abel's Theorem    Abel, Niels Henrik Abel's Theorem Suppose the power series has radius of convergence and the series converges. Then converges uniformly on .    The proof of this is not intuitive, but involves a clever technique known as Abel's Partial Summation Formula.    Let be real numbers and let . Then .     Abel, Niels Henrik Abel's Partial Summation Formula   Prove Lemma .    For , .       Abel's Lemma   Let be real numbers with and let . Suppose for all . Then .       Abel, Niels Henrik Abel's Lemma Prove Lemma .     Abel, Niels Henrik Abel's Theorem   Prove Theorem .    Let . Since converges then by the Cauchy Criterion, there exists such that if then . Let . By Lemma , .  Thus for , ,       Suppose the power series has radius of convergence and the series converges. Then converges uniformly on .     power series uniform convergence of  uniform convergence power series and  uniform convergence of power series at the endpoints of the interval of convergence   Prove Corollary .    Consider .    "
},
{
  "id": "problem-191",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#problem-191",
  "type": "Problem",
  "number": "11.4.1",
  "title": "",
  "body": " power series Weierstrass- Test and  power series converge uniformly inside their radius of convergence   Suppose the power series has radius of convergence and the series converges absolutely. Then converges uniformly on .    For , .   "
},
{
  "id": "AbelsTheorem",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#AbelsTheorem",
  "type": "Theorem",
  "number": "11.4.2",
  "title": "",
  "body": "   Abel's Theorem    Abel, Niels Henrik Abel's Theorem Suppose the power series has radius of convergence and the series converges. Then converges uniformly on .   "
},
{
  "id": "lemma_AbelsPartialSummationFormula",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#lemma_AbelsPartialSummationFormula",
  "type": "Lemma",
  "number": "11.4.3",
  "title": "",
  "body": "  Let be real numbers and let . Then .   "
},
{
  "id": "problem-192",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#problem-192",
  "type": "Problem",
  "number": "11.4.4",
  "title": "",
  "body": " Abel, Niels Henrik Abel's Partial Summation Formula   Prove Lemma .    For , .   "
},
{
  "id": "lemma_AbelsLemma",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#lemma_AbelsLemma",
  "type": "Lemma",
  "number": "11.4.5",
  "title": "",
  "body": "   Abel's Lemma   Let be real numbers with and let . Suppose for all . Then .   "
},
{
  "id": "problem-193",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#problem-193",
  "type": "Problem",
  "number": "11.4.6",
  "title": "",
  "body": "   Abel, Niels Henrik Abel's Lemma Prove Lemma .   "
},
{
  "id": "problem-194",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#problem-194",
  "type": "Problem",
  "number": "11.4.7",
  "title": "",
  "body": " Abel, Niels Henrik Abel's Theorem   Prove Theorem .    Let . Since converges then by the Cauchy Criterion, there exists such that if then . Let . By Lemma , .  Thus for , ,    "
},
{
  "id": "cor_PowerSeriesConvUnif",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#cor_PowerSeriesConvUnif",
  "type": "Corollary",
  "number": "11.4.8",
  "title": "",
  "body": "  Suppose the power series has radius of convergence and the series converges. Then converges uniformly on .   "
},
{
  "id": "problem-195",
  "level": "2",
  "url": "PowerSeriesRedux-AbelsThm.html#problem-195",
  "type": "Problem",
  "number": "11.4.9",
  "title": "",
  "body": " power series uniform convergence of  uniform convergence power series and  uniform convergence of power series at the endpoints of the interval of convergence   Prove Corollary .    Consider .   "
},
{
  "id": "BackToFourier-InfiniteSets",
  "level": "1",
  "url": "BackToFourier-InfiniteSets.html",
  "type": "Section",
  "number": "12.1",
  "title": "Infinite Sets",
  "body": " Infinite Sets  The following theorem follows directly from our previous work with the NIP and will be very handy later. It basically says that a sequence of nested closed intervals will still have a non-empty intersection even if their lengths do not converge to zero as in the NIP.     Nested Interval Property (NIP) weak form Let be a sequence of nested intervals such that . Then there is at least one such that for all .     By Corollary of Chapter , we know that a bounded increasing sequence such as converges, say to . Since for and , then for any fixed , . This says for all .      Nested Interval Property (NIP) weak form Suppose . Show that there are at least two points, and , such that and for all .    Our next theorem says that in a certain, very technical sense there are more real numbers than there are counting numbers . This probably does not seem terribly significant. After all, there are real numbers which are not counting numbers. What will make this so startling is that the same cannot be said about all sets which strictly contain the counting numbers. We will get into the details of this after the theorem is proved.     Cantor, (1874)     Cantor, Georg  first proof that is uncountable     is uncountable  Cantor's first proof  Let be a sequence of real numbers. There is a real number , which is not in .   To streamline things, we are abusing notation here as we are letting denote both the sequence (which is ordered) and the underlying (unordered) set of entries in the sequence.      For the sake of obtaining a contradiction assume that the sequence contains every real number; that is, . As usual we will build a sequence of nested intervals .  Let be the smaller of the first two distinct elements of , let be the larger and take to be the first interval.  Next we assume that has been constructed and build as follows. Observe that there are infinitely many elements of in since . Let and be the first two distinct elements of such that .  Take to be the smaller and to be the larger of and . Then is the th interval.  From the way we constructed them it is clear that .  Therefore by Theorem there is a real number, say , such that .  In fact, since it is clear that .  We will show that is the number we seek. That the inequalities in formula are strict will play a crucial role.  To see that we suppose that and derive a contradiction.  So, suppose that for some . Then only appear before in the sequence . Since each is taken from it follows that only finitely many elements of the sequence appear before in the sequence as well.  Let be the last element of which appears before in the sequence and consider . The way it was constructed, was one of the first two distinct terms in the sequence strictly between and , the other being . Since does not appear before in the sequence and , it follows that either or . However, this gives us a contradiction as we know from formula that .  Thus is not an element of .   So how does this theorem show that there are more real numbers than counting numbers? Before we address that question we need to be very careful about the meaning of the word 'more' when we're talking about infinite sets.  First let's consider two finite sets, say and . How do we know that is the bigger set? (It obviously is.) Clearly we can just count the number of elements in both and . Since and and  is clearly bigger. But we're looking for a way to determine the relative size of two sets without counting them because we have no way of counting the number of elements of an infinite set. Indeed, it isn't even clear what the phrase the number of elements might mean when applied to the elements of an infinite set.  When we count the number of elements in a finite set what we're really doing is matching up the elements of the set with a set of consecutive positive integers, starting at . Thus since we see that . Moreover, the order of the match-up is unimportant. Thus since it is clear that the elements of and the set can be matched up as well. And it doesn't matter what order either set is in. They both have elements.  Such a match-up is called a one-to-one correspondence. In general, if two sets can be put in one-to-one correspondence then they are the same size. Of course the word size has lots of connotations that will begin to get in the way when we talk about infinite sets, so instead we will say that the two sets have the same cardinality. Speaking loosely, this just means that they are the same size.  More precisely, if a given set can be put in one-to-one correspondence with a finite set of consecutive integers, say , then we say that the cardinality of the set is . But this just means that both sets have the same cardinality. It is this notion of one-to-one correspondence, along with the next two definitions, which will allow us to compare the sizes (cardinalities) of infinite sets.     cardinality countable sets  countable sets defintion of Any set which can be put into one-to-one correspondence with is called a countably infinite set. Any set which is either finite or countably infinite is said to be countable .    Since is an infinite set, we have no symbol to designate its cardinality so we have to invent one. The symbol used by Cantor Cantor, Georg and adopted by mathematicians ever since is . Thus the cardinality of any countably infinite set is .    is the first letter of the Hebrew alphabet and is pronounced \"aleph.\" is pronounced \"aleph null.\"   We have already given the following definition informally. We include it formally here for later reference.     cardinality equal cardinality If two sets can be put into one-to-one correspondence then they are said to have the same cardinality .    With these two definitions in place we can see that Theorem is nothing less than the statement that the real numbers are not countably infinite. Since it is certainly not finite, then we say that the set of real numbers is uncountable and therefore bigger than the natural numbers!  To see this let us suppose first that each real number appears in the sequence exactly once. In that case the indexing of our sequence is really just a one-to-one correspondence between the elements of the sequence and    If some real numbers are repeated in our sequence then all of the real numbers are a subset of our sequence and will therefore also be countable (see Problem , part a).  In either case, every sequence is countable. But our theorem says that no sequence in includes all of . Therefore is uncountable.  Most of the sets you have encountered so far in your life have been countable.   countable sets countable sets drill, 5 parts   Show that each of the following sets is countable.                   The set of prime numbers         In fact, if we start with a countable set it is rather difficult to use it to build anything but another countable set.   countable sets unions and intersections of   Let be a collection of countable sets. Show that each of the following sets is also countable:    Any subset of .                        It seems that no matter what we do the only example of an uncountably infinite set is . But wait! Remember the rational numbers? They were similar to the real numbers in many ways. Perhaps they are uncountably infinite too?  Alas, no. The rational numbers turn out to be countable too.     is countable Show that is countable.     Sketch of Proof  First explain how you know that all of the non-negative rational numbers are in this list: .  However there is clearly some duplication. To handle this, apply part (a) of Problem . Does this complete the proof or is there more to do?      is countable Prove Theorem .    The following corollary says that the cardinality of the real numbers is much larger than the cardinality of the rational numbers, despite the fact that both are infinite.  That is, as a subset of the reals, the rationals can be contained in a sequence of intervals, the sum of whose lengths can be arbitrarily small. In a sense this says that a countably infinite set is so small (on the transfinite scale) that it is almost finite.   measure zero Usually we express this idea with the statement, is a set of measure zero in . The term measure has a precise meaning which we will not pursue. The following corollary contains the essence of the idea.    Let be given. There is a collection of intervals in , such that and .       has measure zero in  measure zero has measure zero in Prove Corollary .    If we had only finitely many rationals to deal with this would be easy. Let be these rational numbers and take and . Then for all  and .  The difficulty is, how do we move from the finite to the infinite case?]    Notice how this idea hearkens back to the discussion of Leibniz's Leibniz, Gottfried Wilhelm approach to the Product Rule ( equation ). He simply tossed aside the expression because it was infinitely small compared to either or . Although this isn't quite the same thing we are discussing here it is similar and it is clear that Leibniz's insight and intuition were extremely acute. They were moving him in the right direction, at least.  All of our efforts to build an uncountable set from a countable one have come to nothing. In fact many sets that at first feel like they should be uncountable are in fact countable. This makes the uncountability of all the more remarkable.   The failure is in the methods we've used so far. It is possible to build an uncountable set using just two symbols if we're clever enough, but this would take us too far away from our main topic.   However if we start with an uncountable set it is relatively easy to build others from it.   sets intervals are uncountable   Let and be two open intervals of real numbers. Show that these two sets have the same cardinality by constructing a one-to-one onto function between them.   A linear function should do the trick.    Show that any open interval of real numbers has the same cardinality as .   Consider the interval .    Show that and have the same cardinality.   Note that and have the same cardinality.    Show that and have the same cardinality.    "
},
{
  "id": "thm_WeakNIP",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#thm_WeakNIP",
  "type": "Theorem",
  "number": "12.1.1",
  "title": "",
  "body": "   Nested Interval Property (NIP) weak form Let be a sequence of nested intervals such that . Then there is at least one such that for all .   "
},
{
  "id": "proof-31",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#proof-31",
  "type": "Proof",
  "number": "12.1.1",
  "title": "",
  "body": " By Corollary of Chapter , we know that a bounded increasing sequence such as converges, say to . Since for and , then for any fixed , . This says for all .  "
},
{
  "id": "problem-199",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#problem-199",
  "type": "Problem",
  "number": "12.1.2",
  "title": "",
  "body": "   Nested Interval Property (NIP) weak form Suppose . Show that there are at least two points, and , such that and for all .   "
},
{
  "id": "thm_NoSeriesContainsAllReals",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#thm_NoSeriesContainsAllReals",
  "type": "Theorem",
  "number": "12.1.3",
  "title": "",
  "body": "   Cantor, (1874)     Cantor, Georg  first proof that is uncountable     is uncountable  Cantor's first proof  Let be a sequence of real numbers. There is a real number , which is not in .   To streamline things, we are abusing notation here as we are letting denote both the sequence (which is ordered) and the underlying (unordered) set of entries in the sequence.    "
},
{
  "id": "proof-32",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#proof-32",
  "type": "Proof",
  "number": "12.1.2",
  "title": "",
  "body": " For the sake of obtaining a contradiction assume that the sequence contains every real number; that is, . As usual we will build a sequence of nested intervals .  Let be the smaller of the first two distinct elements of , let be the larger and take to be the first interval.  Next we assume that has been constructed and build as follows. Observe that there are infinitely many elements of in since . Let and be the first two distinct elements of such that .  Take to be the smaller and to be the larger of and . Then is the th interval.  From the way we constructed them it is clear that .  Therefore by Theorem there is a real number, say , such that .  In fact, since it is clear that .  We will show that is the number we seek. That the inequalities in formula are strict will play a crucial role.  To see that we suppose that and derive a contradiction.  So, suppose that for some . Then only appear before in the sequence . Since each is taken from it follows that only finitely many elements of the sequence appear before in the sequence as well.  Let be the last element of which appears before in the sequence and consider . The way it was constructed, was one of the first two distinct terms in the sequence strictly between and , the other being . Since does not appear before in the sequence and , it follows that either or . However, this gives us a contradiction as we know from formula that .  Thus is not an element of .  "
},
{
  "id": "def_CountableSets",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#def_CountableSets",
  "type": "Definition",
  "number": "12.1.4",
  "title": "",
  "body": "   cardinality countable sets  countable sets defintion of Any set which can be put into one-to-one correspondence with is called a countably infinite set. Any set which is either finite or countably infinite is said to be countable .   "
},
{
  "id": "def_EqualCardinality",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#def_EqualCardinality",
  "type": "Definition",
  "number": "12.1.5",
  "title": "",
  "body": "   cardinality equal cardinality If two sets can be put into one-to-one correspondence then they are said to have the same cardinality .   "
},
{
  "id": "problem-200",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#problem-200",
  "type": "Problem",
  "number": "12.1.6",
  "title": "",
  "body": " countable sets countable sets drill, 5 parts   Show that each of the following sets is countable.                   The set of prime numbers        "
},
{
  "id": "prob_countable_sets_unions_of",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#prob_countable_sets_unions_of",
  "type": "Problem",
  "number": "12.1.7",
  "title": "",
  "body": " countable sets unions and intersections of   Let be a collection of countable sets. Show that each of the following sets is also countable:    Any subset of .                       "
},
{
  "id": "thm_QisCountable",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#thm_QisCountable",
  "type": "Theorem",
  "number": "12.1.8",
  "title": "",
  "body": "   is countable Show that is countable.   "
},
{
  "id": "proof-33",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#proof-33",
  "type": "Proof",
  "number": "12.1.3",
  "title": "Sketch of Proof.",
  "body": " Sketch of Proof  First explain how you know that all of the non-negative rational numbers are in this list: .  However there is clearly some duplication. To handle this, apply part (a) of Problem . Does this complete the proof or is there more to do?  "
},
{
  "id": "problem-202",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#problem-202",
  "type": "Problem",
  "number": "12.1.9",
  "title": "",
  "body": "   is countable Prove Theorem .   "
},
{
  "id": "cor_Q-MeasureZero",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#cor_Q-MeasureZero",
  "type": "Corollary",
  "number": "12.1.10",
  "title": "",
  "body": "  Let be given. There is a collection of intervals in , such that and .   "
},
{
  "id": "problem-203",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#problem-203",
  "type": "Problem",
  "number": "12.1.11",
  "title": "",
  "body": "   has measure zero in  measure zero has measure zero in Prove Corollary .    If we had only finitely many rationals to deal with this would be easy. Let be these rational numbers and take and . Then for all  and .  The difficulty is, how do we move from the finite to the infinite case?]   "
},
{
  "id": "problem-204",
  "level": "2",
  "url": "BackToFourier-InfiniteSets.html#problem-204",
  "type": "Problem",
  "number": "12.1.12",
  "title": "",
  "body": " sets intervals are uncountable   Let and be two open intervals of real numbers. Show that these two sets have the same cardinality by constructing a one-to-one onto function between them.   A linear function should do the trick.    Show that any open interval of real numbers has the same cardinality as .   Consider the interval .    Show that and have the same cardinality.   Note that and have the same cardinality.    Show that and have the same cardinality.   "
},
{
  "id": "BackToFourier-CantorsTheorem",
  "level": "1",
  "url": "BackToFourier-CantorsTheorem.html",
  "type": "Section",
  "number": "12.2",
  "title": "Cantor’s Theorem and Its Consequences",
  "body": " Cantor's Theorem and Its Consequences   Richard Dedekind  Dedekind, Richard portrait of    Once Cantor showed that there were two types of infinity (countable and uncountable), the following question was natural, Do all uncountable sets have the same cardinality?   Just like not all non-dogs are cats, there is, offhand, no reason to believe that all uncountable sets should be the same size. However constructing uncountable sets of different sizes is not as easy as it sounds.    Dedekind, Richard    Cantor, Georg  unit interval and unit square have equal cardinalty  For example, what about the line segment represented by the interval and the square represented by the set . Certainly the two dimensional square must be a larger infinite set than the one dimensional line segment. Remarkably, Cantor showed that these two sets were the same cardinality. In his 1877 correspondence of this result to his friend and fellow mathematician, Richard Dedekind, even Cantor remarked, I see it, but I don't believe it!   The following gives the original idea of Cantor's proof. Cantor devised the following function . First, we represent the coordinates of any point by their decimal representations and . Even terminating decimals can be written this way as we could write . We can then define by .  This relatively simple idea has some technical difficulties in it related to the following result.     series Geometric series converges to Consider the sequence . Determine that this sequence converges and, in fact, it converges to . This suggests that .    Similarly, we have , etc. To make the decimal representation of a real number in unique, we must make a consistent choice of writing a terminating decimal as one that ends in an infinite string of zeros or an infinite string of nines [with the one exception ]. No matter which choice we make, we could never make this function onto. For example, would have as its pre-image which would be a mix of the two conventions.  Cantor was able to overcome this technicality to demonstrate a one to one correspondence, but instead we will note that in either convention, the function is one-to-one, so this says that the set is the same cardinality as some (uncountable) subset of . The fact that this has the same cardinality as is something we will come back to. But first we'll try construct an uncountable set which does not have the same cardinality as . To address this issue, Cantor proved the following in 1891.     Cantor's Theorem     Cantor, Georg  Cantor's Theorem  Let be any set. Then there is no one-to-one correspondence between and , the set of all subsets of .    Since can be put into one-to-one correspondence with a subset of ( ), then this says that is at least as large as S. In the finite case is strictly greater than as the following problem shows. It also demonstrates why is called the power set of .   sets power set  sets cardinality of a power set  cardinality of a power set   Prove: If , then .    Let . Consider the following correspondence between the elements of and the set of all -tuples of yes (Y) or no (N):   How many elements are in      Cantor, Georg Cantor's Theorem   Prove Cantor's Theorem .    Assume for contradiction, that there is a one-to-one correspondence . Consider . Since is onto, then there is such that . Is or is     Actually it turns out that and have the same cardinality. This can be seen in a roundabout way using some of the above ideas from Problem . Specifically, let be the set of all sequences of zeros or ones (you can use s or s, if you prefer). Then it is straightforward to see that and have the same cardinality.  If we consider , which has the same cardinality as , then we can see that this has the same cardinality as as well. Specifically, if we think of the numbers in binary, then every real number in can be written as where . We have to account for the fact that binary representations such as and represent the same real number (say that no representations will end in an infinite string of zeros), then we can see that has the same cardinality as , where is the set of all sequences ending in an infinite string of zeros. It turns out that itself is a countable set.     countable sets countable union of finite sets Let . Show that for each , is finite and use this to conclude that is countably infinite.    The above problems say that , , , and all have the same cardinality. The following two problems show that deleting a countable set from an uncountable set does not change its cardinality.     sets countably infinite subsets Let be an infinite set. Prove that contains a countably infinite subset.     countable sets deleting a countable subset   Suppose is an uncountable set and is countably infinite.    Prove that and are both uncountable sets.    Prove that and have the same cardinality.   Let . If is an infinite set, then by the previous problem it contains a countably infinite set . Likewise if is infinite it also contains an infinite set . Again, if is an infinite set then it contains an infinite set , etc. For , let be a one-to-one correspondence and define by .  Show that is one-to-one and onto.    As we indicated before, Cantor's Cantor, Georg work on infinite sets had a profound impact on mathematics in the beginning of the twentieth century. For example, in examining the proof of Cantor's Theorem, the eminent logician Bertrand Russell devised his famous paradox in 1901. Before this time, a set was naively thought of as just a collection of objects. Through the work of Cantor and others, sets were becoming a central object of study in mathematics as many mathematical concepts were being reformulated in terms of sets. The idea was that set theory was to be a unifying theme of mathematics. This paradox set the mathematical world on its ear.   Russell's Paradox:  Russell's Paradox Consider the set of all sets which are not elements of themselves. We call this set and ask, Is Symbolically, this set is .  If , then by definition, . If , then by definition, .  If you look back at the proof of Cantor's Theorem, this was basically the idea that gave us the contradiction. To have such a contradiction occurring at the most basic level of mathematics was scandalous. It forced a number of mathematicians and logicians to carefully devise the axioms by which sets could be constructed. To be honest, most mathematicians still approach set theory from a naive point of view as the sets we typically deal with fall under the category of what we would call normal sets. In fact, such an approach is officially called Naive Set Theory (as opposed to Axiomatic Set Theory). However, attempts to put set theory and logic on solid footing led to the modern study of symbolic logic and ultimately the design of computer (machine) logic.  Another place where Cantor's work had a profound influence in modern logic comes from something we alluded to before. We showed before that the unit square had the same cardinality as an uncountable subset of . In fact, Cantor Cantor, Georg showed that the unit square had the same cardinality as itself and was moved to advance the following in 1878.   The Continuum Hypothesis  Continuum Hypothesis original   Every uncountable subset of has the same cardinality as .    Cantor was unable to prove or disprove this conjecture (along with every other mathematician). In fact, proving or disproving the Continuum Hypothesis, was one of Hilbert's famous 23 problems presented as a challenge to mathematicians at the International Congress of Mathematicians in 1900.  Since has the same cardinality as , then the Continuum Hypothesis was generalized to the:   The Generalized Continuum Hypothesis  Continuum Hypothesis generalized   Given an infinite set , there is no infinite set which has a cardinality strictly between that of and its power set .     The Zermelo-Fraenkel Axioms  One of the formal axiomatic approaches to set theory established by Ernst Zermelo in 1908 and revised by Abraham Fraenkel in 1921.   Efforts to prove or disprove this were in vain and with good reason. In 1940, the logician Kurt Gödel showed that the Continuum Hypothesis could not be disproved from the Zermelo-Fraenkel Axioms of set theory. In 1963, Paul Cohen showed that the Continuum Hypothesis could not be proved using the Zermelo-Fraenkel Axioms. In other words, the Zermelo-Fraenkel Axioms do not contain enough information to decide the truth of the hypothesis.  We are willing to bet that at this point your head might be swimming a bit with uncertainty. If so, then know that these are the same feelings that the mathematical community experienced in the mid twentieth century. In the past, mathematics was seen as a model of logical certainty. It is disconcerting to find that there are statements that are undecidable. In fact, Gödel proved in 1931 that a consistent finite axiom system that contained the axioms of arithmetic would always contain undecidable statements which could neither be proved true nor false with those axioms. Mathematical knowledge would always be incomplete.   Kurt Gödel  Gödel, Kurt portrait of    So by trying to put the foundations of calculus on solid ground, we have come to a point where we can never obtain mathematical certainty. Does this mean that we should throw up our hands and concede defeat? Should we be paralyzed with fear of trying anything? Certainly not! As we mentioned before, most mathematicians do well by taking a pragmatic approach: using their mathematics to solve problems that they encounter. In fact, it is typically the problems that motivate the mathematics. It is true that mathematicians take chances that don't always pan out, but they still take these chances, often with success. Even when the successes lead to more questions, as they typically do, tackling those questions usually leads to a deeper understanding. At the very least, our incomplete understanding means we will always have more questions to answer, more problems to solve.  What else could a mathematician ask for?  "
},
{
  "id": "figure-38",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#figure-38",
  "type": "Figure",
  "number": "12.2.1",
  "title": "",
  "body": " Richard Dedekind  Dedekind, Richard portrait of   "
},
{
  "id": "problem-205",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#problem-205",
  "type": "Problem",
  "number": "12.2.2",
  "title": "",
  "body": "   series Geometric series converges to Consider the sequence . Determine that this sequence converges and, in fact, it converges to . This suggests that .   "
},
{
  "id": "thm_CantorsTheorem",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#thm_CantorsTheorem",
  "type": "Theorem",
  "number": "12.2.3",
  "title": "",
  "body": "   Cantor's Theorem     Cantor, Georg  Cantor's Theorem  Let be any set. Then there is no one-to-one correspondence between and , the set of all subsets of .   "
},
{
  "id": "prob_PowerSet",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#prob_PowerSet",
  "type": "Problem",
  "number": "12.2.4",
  "title": "",
  "body": " sets power set  sets cardinality of a power set  cardinality of a power set   Prove: If , then .    Let . Consider the following correspondence between the elements of and the set of all -tuples of yes (Y) or no (N):   How many elements are in    "
},
{
  "id": "problem-207",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#problem-207",
  "type": "Problem",
  "number": "12.2.5",
  "title": "",
  "body": " Cantor, Georg Cantor's Theorem   Prove Cantor's Theorem .    Assume for contradiction, that there is a one-to-one correspondence . Consider . Since is onto, then there is such that . Is or is    "
},
{
  "id": "problem-208",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#problem-208",
  "type": "Problem",
  "number": "12.2.6",
  "title": "",
  "body": "   countable sets countable union of finite sets Let . Show that for each , is finite and use this to conclude that is countably infinite.   "
},
{
  "id": "problem-209",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#problem-209",
  "type": "Problem",
  "number": "12.2.7",
  "title": "",
  "body": "   sets countably infinite subsets Let be an infinite set. Prove that contains a countably infinite subset.   "
},
{
  "id": "problem-210",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#problem-210",
  "type": "Problem",
  "number": "12.2.8",
  "title": "",
  "body": " countable sets deleting a countable subset   Suppose is an uncountable set and is countably infinite.    Prove that and are both uncountable sets.    Prove that and have the same cardinality.   Let . If is an infinite set, then by the previous problem it contains a countably infinite set . Likewise if is infinite it also contains an infinite set . Again, if is an infinite set then it contains an infinite set , etc. For , let be a one-to-one correspondence and define by .  Show that is one-to-one and onto.   "
},
{
  "id": "p-1413",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#p-1413",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Russell's Paradox: "
},
{
  "id": "conjecture-2",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#conjecture-2",
  "type": "Conjecture",
  "number": "12.2.9",
  "title": "The Continuum Hypothesis.",
  "body": " The Continuum Hypothesis  Continuum Hypothesis original   Every uncountable subset of has the same cardinality as .   "
},
{
  "id": "conjecture-3",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#conjecture-3",
  "type": "Conjecture",
  "number": "12.2.10",
  "title": "The Generalized Continuum Hypothesis.",
  "body": " The Generalized Continuum Hypothesis  Continuum Hypothesis generalized   Given an infinite set , there is no infinite set which has a cardinality strictly between that of and its power set .   "
},
{
  "id": "figure-39",
  "level": "2",
  "url": "BackToFourier-CantorsTheorem.html#figure-39",
  "type": "Figure",
  "number": "12.2.11",
  "title": "",
  "body": " Kurt Gödel  Gödel, Kurt portrait of   "
},
{
  "id": "Epilogues-NatureNumbers",
  "level": "1",
  "url": "Epilogues-NatureNumbers.html",
  "type": "Section",
  "number": "13.1",
  "title": "On the Nature of Numbers: A Dialogue (with Apologies to Galileo)",
  "body": " On the Nature of Numbers: A Dialogue (with Apologies to Galileo)    Interlocuters : Salviati, Sagredo, and Simplicio; Three Friends of Galileo Galilei    Setting : Three friends meet in a garden for lunch in Renassaince Italy. Prior to their meal they discuss the book How We Got From There to Here: A Story of Real Analysis. How they obtained a copy is not clear.   Salviati : My good sirs. I have read this very strange volume as I hope you have?   Sagredo : I have and I also found it very strange.   Simplicio : Very strange indeed; at once silly and mystifying.   Salviati : Silly? How so?   Simplicio : These authors begin their tome with the question, What is a number? This is an unusually silly question, don't you think? Numbers are numbers. Everyone knows what they are.   Sagredo : I thought so as well until I reached the last chapter. But now I am not so certain. What about this quantity If this counts the positive integers, isn't it a number? If not, then how can it count anything? If so, then what number is it? These questions plague me 'til I scarcely believe I know anything anymore.   Simplicio : Of course is not a number! It is simply a new name for the infinite, and infinity is not a number.   Sagredo : But isn't the cardinality of the set of natural numbers, , in just the same way that the cardinality of the set is If is a number, then why isn't    Simplicio : Ah, my friend, like our authors you are simply playing with words. You count the elements in the set you see plainly that the number of elements it contains is and then you change your language. Rather than saying that the number of elements in is you say that the cardinality is . But clearly cardinality and number of elements mean the same thing.  Similarly you use the symbol to denote the set of positive integers. With your new word and symbol you make the statement the cardinality (number of elements) of is . This statement has the same grammatical form as the statement the number of elements (cardinality) of is three. Since three is a number you conclude that is also a number.  But this is simply nonsense dressed up to sound sensible. If we unwind our notation and language, your statement is simply, The number of positive integers is infinite. This is obviously nonsense because infinity is not a number.  Even if we take infinity as an undefined term and try to define it by your statement this is still nonsense since you are using the word number to define a new number called infinity. This definition is circular. Thus it is no definition at all. It is nonsense.   Salviati : Your reasoning on this certainly seems sound.   Simplicio : Thank you.   Salviati : However, there are a couple of small points I would like to examine more closely if you will indulge me?   Simplicio : Of course. What troubles you?   Salviati : You've said that we cannot use the word number to define numbers because this would be circular reasoning. I entirely agree, but I am not sure this is what our authors are doing.  Consider the set . Do you agree that it contains three elements?   Simplicio : Obviously.   Sagredo : Ah! I see your point! That there are three elements does not depend on what those elements are. Any set with three elements has three elements regardless of the nature of the elements. Thus saying that the set contains three elements does not define the word number in a circular manner because it is irrelevant that the number 3 is one of the elements of the set. Thus to say that three is the cardinality of the set has the same meaning as saying that there are three elements in the set . In both cases the number is the name that we give to the totality of the elements of each set.   Salviati : Precisely. In exactly the same way is the symbol we use to denote the totality of the set of positive integers.  Thus is a number in the same sense that ' ' is a number, is it not?   Simplicio : I see that we can say in a meaningful way that three is the cardinality of any set with . . . well, . . . with three elements (it becomes very difficult to talk about these things) but this is simply a tautology! It is a way of saying that a set which has three elements has three elements!  This means only that we have counted them and we had to stop at three. In order to do this we must have numbers first. Which, of course, we do. As I said, everyone knows what numbers are.   Sagredo : I must confess, my friend, that I become more confused as we speak. I am no longer certain that I really know what a number is. Since you seem to have retained your certainty can you clear this up for me? Can you tell me what a number is?   Simplicio : Certainly. A number is what we have just been discussing. It is what you have when you stop counting. For example, three is the totality (to use your phrase) of the elements of the sets or because when I count the elements in either set I have to stop at three. Nothing less, nothing more. Thus three is a number.   Salviati : But this definition only confuses me! Surely you will allow that fractions are numbers? What is counted when we end with, say or    Simplicio : This is simplicity itself. is the number we get when we have divided something into equal pieces and we have counted four of these fifths. This is four-fifths. You see? Even the language we use naturally bends itself to our purpose.   Salviati : But what of one-fifth? In order to count one fifth we must first divide something into fifths. To do this we must know what one-fifth is, musn't we? We seem to be using the word number to define itself again. Have we not come full circle and gotten nowhere?   Simplicio : I confess this had not occurred to me before. But your objection is easily answered. To count one-fifth we simply divide our something into tenths. Then we count two of them. Since two-tenths is the same as one-fifth the problem is solved. Do you see?   Sagredo : I see your point but it will not suffice at all! It merely replaces the question, What is one-fifth? with, What is one-tenth? Nor will it do to say that one-tenth is merely two-twentieths. This simply shifts the question back another level.  Archimedes said, Give me a place to stand and a lever long enough and I will move the earth. But of course he never moved the earth because he had nowhere to stand. We seem to find ourselves in Archimedes' predicament: We have no place to stand.   Simplicio : I confess I don't see a way to answer this right now. However I'm sure an answer can be found if we only think hard enough. In the meantime I cannot accept that is a number. It is, as I said before, infinity and infinity is not a number! We may as well believe in fairies and leprechauns if we call infinity a number.   Sagredo : But again we've come full circle. We cannot say definitively that is or is not a number until we can state with confidence what a number is. And even if we could find solid ground on which to solve the problem of fractions, what of Or Certainly these are numbers but I see no way to count to either of them.   Simplicio : Alas! I am beset by demons! I am bewitched! I no longer believe what I know to be true!   Salviati : Perhaps things are not quite as bad as that. Let us consider further. You said earlier that we all know what numbers are, and I agree. But perhaps your statement needs to be more precisely formulated. Suppose we say instead that we all know what numbers need to be? Or that we know what we want numbers to be?  Even if we cannot say with certainly what numbers are surely we can say what we want and need for them to be. Do you agree?   Sagredo : I do.   Simplicio : And so do I.   Salviati : Then let us invent numbers anew, as if we've never seen them before, always keeping in mind those properties we need for numbers to have. If we take this as a starting point then the question we need to address is, What do we need numbers to be?    Sagredo : This is obvious! We need to be able to add them and we need to be able to multiply them together, and the result should also be a number.   Simplicio : And subtract and divide too, of course.   Sagredo : I am not so sure we actually need these. Could we not define  subtract two from three to be add negative two to three and thus dispense with subtraction and division?   Simplicio : I suppose we can but I see no advantage in doing so. Why not simply have subtraction and division as we've always known them?   Sagredo : The advantage is parsimony. Two arithmetic operations are easier to keep track of than four. I suggest we go forward with only addition and multiplication for now. If we find we need subtraction or division we can consider them later.   Simplicio : Agreed. And I now see another advantage. Obviously addition and multiplication must not depend on order. That is, if and are numbers then must be equal to and must be equal to . This is not true for subtraction, for does not equal . But if we define subtraction as you suggest then this symmetry is preserved: .   Sagredo : Excellent! Another property we will require of numbers occurs to me now. When adding or multiplying more than two numbers it should not matter where we begin. That is, if , and are numbers it should be true that and .   Simplicio : Yes! We have it! Any objects which combine in these precise ways can be called numbers.   Salviati : Certainly these properties are necessary, but I don't think they are yet sufficient to our purpose. For example, the number is unique in that it is the only number which, when multiplying another number leaves it unchanged.  For example: . Or, in general, if is a number then .   Sagredo : Yes. Indeed. It occurs to me that the number zero plays a similar role for addition: .   Salviati : It does not seem to me that addition and multiplication, as we have defined them, force or into existence so I believe we will have to postulate their existence independently.   Sagredo : Is this everything then? Is this all we require of numbers?   Simplicio : I don't think we are quite done yet. How shall we get division?   Sagredo : In the same way that we defined subtraction to be the addition of a negative number, can we not define division to be multiplication by a reciprocal? For example, divided by can be considered  multiplied by , can it not?   Salviati : I think it can. But observe that every number will need to have a corresponding negative so that we can subtract any amount. And again nothing we've discussed so far forces these negative numbers into existence so we will have to postulate their existence separately.   Simplicio : And in the same way every number will need a reciprocal so that we can divide by any amount.   Sagredo : Every number that is, except zero.   Simplicio : Yes, this is true. Strange is it not, that of them all only this one number needs no reciprocal? Shall we also postulate that zero has no reciprocal?   Salviati : I don't see why we should. Possibly is the reciprocal of zero. Or possibly not. But I see no need to concern ourselves with things we do not need.   Simplicio : Is this everything then? Have we discovered all that we need for numbers to be?   Salviati : I believe there is only one property missing. We have postulated addition and we have postulated multiplication and we have described the numbers zero and one which play similar roles for addition and multiplication respectively. But we have not described how addition and multiplication work together.  That is, we need a rule of distribution: If , and are all numbers then .  With this in place I believe we have everything we need.   Simplicio : Indeed. We can also see from this that cannot be a number since, in the first place, it cannot be added to another number and in the second, even if it could be added to a number the result is surely not also a number.   Salviati : My dear Simplicio, I fear you have missed the point entirely! Our axioms do not declare what a number is, only how it behaves with respect to addition and multiplication with other numbers. Thus it is a mistake to presume that numbers are only those objects that we have always believed them to be. In fact, it now occurs to me that addition and multiplication also needn't be seen as the operations we have always believed them to be.  For example suppose we have three objects, and suppose that we define addition and multiplication by the following tables:   I submit that our set along with these definitions satisfy all of our axioms and thus , and qualify to be called numbers.    Simplicio : This cannot be! There is no zero, no one!   Sagredo : But there is. Do you not see that plays the role of zero if you add it to any number you get that number back. Similarly plays the role of one.   Simplicio : This is astonishing! If and can be numbers then I am less sure than ever that I know what numbers are! Why, if we replace , and with Simplicio  Sagredo, and Salviati then we become numbers ourselves!   Salviati : Perhaps we will have to be content with knowing how numbers behave rather than knowing what they are.  However I confess that I have a certain affection for the numbers I grew up with. Let us call those the real numbers. Any other set of numbers, such as our above we will call a field of numbers, since they seem to provide us with new ground to explore. Or perhaps just a number field ?  As we have been discussing this I have been writing down our axioms. They are these. Numbers are any objects which satisfy all of the following properties:   AXIOMS OF NUMBERS      Axiom I: Definition of Operations  They can be combined by two operations, denoted and + .    Axiom II: Closure  If , and are numbers then is also a number. is also a number.    Axiom II: Commutativity        Axiom III: Associativity        Axiom IV: Additive Identity  There is a number, denoted , such that for any number, , .    Axiom V: Multiplicative Identity  There is a number, denoted , such that for any number, , .    Axiom VI: Additive Inverses  Given any number, , there is a number, denoted , with the property that .    Axiom VII: Multiplicative Inverse  Given any number, , there is a number, denoted , with the property that .    Axiom VIII: The Distributive Property  If , and are numbers then .                                                                  Sagredo : My friend, this is a thing of surpassing beauty! All seems clear to me now. Numbers are any group of objects which satisfy our axioms. That is, a number is anything that acts like a number.   Salviati : Yes this seems to be true.   Simplicio : But wait! We have not settled the question: Is a number or not?   Salviati : If everything we have just done is valid then  could be a number. And so could ,  if we can find a way to define addition and multiplication on the set in a manner that agrees with our axioms.   Sagredo : An arithmetic of infinities! This is a very strange idea. Can such a thing be made sensible?   Simplicio : Not, I think, before lunch. Shall we retire to our meal?    Additional Problems     Show that .    Show that if , then .     number field is a field   Consider the set of ordered pairs of integers: , and define addition and multiplication as follows:     Addition:       Multiplication:   .       If we add the convention that show that this set with these operations forms a number field.   Which number field is this?    number field is a field   Consider the set of ordered pairs of real numbers, , and define addition and multiplication as follows:     Addition:       Multiplication:   .       Show that this set with these operations forms a number field.    Which number field is this?     "
},
{
  "id": "problem-211",
  "level": "2",
  "url": "Epilogues-NatureNumbers.html#problem-211",
  "type": "Problem",
  "number": "13.1.1",
  "title": "",
  "body": "   Show that .    Show that if , then .   "
},
{
  "id": "problem-212",
  "level": "2",
  "url": "Epilogues-NatureNumbers.html#problem-212",
  "type": "Problem",
  "number": "13.1.2",
  "title": "",
  "body": " number field is a field   Consider the set of ordered pairs of integers: , and define addition and multiplication as follows:     Addition:       Multiplication:   .       If we add the convention that show that this set with these operations forms a number field.   Which number field is this?  "
},
{
  "id": "problem-213",
  "level": "2",
  "url": "Epilogues-NatureNumbers.html#problem-213",
  "type": "Problem",
  "number": "13.1.3",
  "title": "",
  "body": " number field is a field   Consider the set of ordered pairs of real numbers, , and define addition and multiplication as follows:     Addition:       Multiplication:   .       Show that this set with these operations forms a number field.    Which number field is this?   "
},
{
  "id": "Epilogues-BuildRealNumbers",
  "level": "1",
  "url": "Epilogues-BuildRealNumbers.html",
  "type": "Section",
  "number": "13.2",
  "title": "Building the Real Numbers",
  "body": " Building the Real Numbers   Contrary to the title of this section we will not be rigorously building the real numbers here. Instead our goal is to show why such a build is logically necessary, and to give a sense of some of the ways this has been accomplished in the past. This may seem odd given our uniform emphasis on mathematical rigor, especially in the third part of the text, but there are very good reasons for this.  One is simple practicality. The fact is that rigorously building the real numbers and then showing that they have the required properties is extraordinarily detailed work, even for mathematics. If we want to keep this text to a manageable size (we do), we simply don't have the room.  The second reason is that there is, as far as we know, very little for you to gain by it. When we are done we will have the real numbers. The same real numbers you have been using all of your life. They have the same properties, and quirks, they've always had. To be sure, they will not have lost any of their charm; They will be the same delightful mix of the mundane and the bizarre, and they are still well worth exploring and getting to know better. But nothing we do in the course of building them up logically from simpler ideas will help with that exploration.  A reasonable question then, is, Why bother? If the process is overwhelmingly, tediously detailed (it is) and gives us nothing new for our efforts, why do it at all?  Andrew Wiles  The man who proved Fermat's Last Theorem .    Andrew Wiles has compared doing mathematics has been compared to entering a dark room. At first you are lost. The layout of the room and furniture are unknown so you fumble about for a bit and slowly get a sense of your immediate environs, perhaps a vague notion of the organization of the room as a whole. Eventually, after much, often tedious exploration, you become quite comfortable in your room. But always there will be dark corners; hidden areas you have not yet explored. Such a dark area may hide anything; the latches to unopened doors you didn't know were there; a clamp whose presence explains why you couldn't move that little desk in the corner; even the light switch that would allow you to illuminate an area more clearly than you would have imagined possible.  But, and this is the point, there is no way to know what you will find there until you walk into that dark corner and begin exploring. Perhaps nothing. But perhaps something wonderful.  This is what happened in the late nineteenth century. The real numbers had been used since the Pythagoreans learned that was irrational. But really, most calculuations were (and still are) done with just the rational numbers. Moreover, since forms a set of measure zero,  measure zero it is clear that most of the real numbers had gone completely unused. The set of real numbers was thus one of those dark corners of mathematics. It had to be explored.  Measure Zero Sets  See Corollary of Chapter .    But even if that is true, you might ask, ``I have no interest in the logical foundations of the real numbers, especially if such knowledge won't tell me anything I don't already know. Why do I need to know all of the details of constructing from   The answer to this is very simple: You don't.  That's the other reason we're not covering all of the details of this material. We will explain enough to light up, dimly perhaps, this little corner of mathematics. Later, should you need (or want) to come back to this and explore further you will have a foundation to start with. Nothing more.  Until the nineteenth century the geometry of Euclid, as given in his book The Elements, was universally regarded as the touchstone of mathematical perfection. This belief was so deeply embedded in Western culture that as recently as 1923, Edna St. Vincent Millay opened one of the poems in her book The Harp Weaver and Other Poems with the line Euclid alone has looked on beauty bare.   Euclid begins his book by stating simple axioms and proceeds, step by logical step, to build up his geometry. Although far from actual perfection, his methods are clean, precise and efficient he arrives at the Pythagorean Theorem in only steps (theorems) and even today Euclid's Elements still sets a very high standard of mathematical exposition and parsimony.  The goal of starting with what is clear and simple and proceeding logically, rigorously, to what is complex is still a guiding principle of all mathematics for a variety of reasons. In the late nineteenth century, this principle was brought to bear on the real numbers. That is, some properties of the real numbers that at first seem simple and intuitively clear turn out on closer examination, as we have seen, to be rather counter-intuitive. This alone is not really a problem. We can have counter-intuitive properties in our mathematics indeed, this is a big part of what makes mathematics interesting as long as we arrive at them logically, starting from simple assumptions the same way Euclid did.  Having arrived at a view of the real numbers which is comparable to that of our nineteenth century colleagues, it should now be clear that the real numbers and their properties must be built up from simpler concepts as suggested by our Italian friends in the previous section.  In addition to those properties we have discovered so far, both and share another property which will be useful. We have used it throughout this text but have not heretofore made it explicit. They are both linearly ordered. We will now make this property explicit.  Linear Ordering  number field linearly ordered   A number field is said to be linearly ordered if there is a relation, denoted , on the elements of the field which satisfies all of the following for all , and in the field.     For all numbers and in the field, exactly one of the following holds:                       If , then for all in the field.    If , and , then .    If and then .       Any number field with such a relation is called a linearly ordered number field and as the following problem shows, not every number field is linearly ordered.   number field linearly ordered   Prove that the following must hold in any linearly ordered number field.      if and only if .    If and then .    For all , .     .       Show that the set of complex numbers ( ) is not a linearly ordered field.    In a thorough, rigorous presentation we would now assume the existence of the natural numbers , and their properties and use these to define the integers, . We would then use the integers to define the rational numbers, . We could then show that the rationals satisfy the field axioms worked out in the previous section, and that they are linearly ordered.  Then at last we would use to define the real numbers , show that these also satisfy the field axioms and also have the other properties we expect: Continuity, the Nested Interval Property, the Least Upper Bound Property, the Bolzano-Weierstrass Theorem, the convergence of all Cauchy sequences, and linear ordering.  We would start with the natural numbers because they seem to be simple enough that we can simply assume their properties. As Leopold Kronecker (1823-1891) said: God made the natural numbers, all else is the work of man.   Unfortunately this is rather a lot to fit into this epilogue so we will have to abbreviate the process rather severely.  We will assume the existence and properties of the rational numbers. Building from the integers is not especially hard and it is easy to show that they satisfy the axioms worked out by Salviati, Sagredo and Simplicio in the previous section. But the level of detail required for rigor quickly becomes onerous.  Even starting at this fairly advanced position in the chain of logic there is still a considerable level of detail needed to complete the process. Therefore our exposition will necessarily be incomplete.  Rather than display, in full rigor, how the real numbers can be built up from the rationals we will show, in fairly broad terms, three ways this has been done in the past. We will give references later in case you'd like to follow up and learn more.    The Decimal Expansion  This is by far the most straightforward method we will examine. Since we begin with , we already have some numbers whose decimal expansion is infinite. For example, . We also know that if then expressing as a decimal gives either a finite or a repeating infinite decimal.  More simply, we can say that consists of the set of all decimal expressions which eventually repeat. (If it eventually repeats zeros then it is what we've called a finite decimal.)  We then define the real numbers to be the set of all infinite decimals, repeating or not.  It may feel as if all we have to do is define addition and multiplication in the obvious fashion and we are finished. This set with these definitions obviously satisfy all of the field axioms worked out by our Italian friends in the previous section. Moreover it seems clear that all of our equivalent completeness axioms are satisfied.  However, things are not quite as clear cut as they seem.  The primary difficulty in this approach is that the decimal representation of the real numbers is so familiar that everything we need to show seems obvious. But stop and think for a moment. Is it really obvious how to define addition and multiplication of infinite decimals? Consider the addition algorithm we were all taught in grade school. That algorithm requires that we line up two numbers at their decimal points: .  We then begin adding in the rightmost column and proceed to the left. But if our decimals are infinite we can't get started because there is no rightmost column!   A similar problem occurs with multiplication.  So our first problem is to define addition and multiplication in in a manner that re-captures addition and multiplication in .  This is not a trivial task.  One way to proceed is to recognize that the decimal notation we've used all of our lives is really shorthand for the sum of an infinite series. That is, if where for all then .  Addition is now apparently easy to define: If and then   But there is a problem. Suppose for some , . In that case our sum does not satisfy the condition so it is not even clear that the expression represents a real number. That is, we may not have the closure property of a number field. We will have to define some sort of carrying operation to handle this.   defining infinite decimal addition   Define addition on infinite decimals in a manner that is closed.    Find an appropriate carry operation for our definition.    A similar difficulty arises when we try to define multiplication. Once we have a notion of carrying in place, we could define multiplication as just the multiplication of series. Specifically, we could define .  We could then convert this to a proper decimal using our carrying operation.  Again the devil is in the details to show that such algebraic operations satisfy everything we want them to. Even then, we need to worry about linearly ordering these numbers and our completeness axiom.  Another way of looking at this is to think of an infinite decimal representation as a (Cauchy) sequence of finite decimal approximations. Since we know how to add and multiply finite decimal representations, we can just add and multiply the individual terms in the sequences. Of course, there is no reason to restrict ourselves to only these specific types of Cauchy sequences, as we see in our next approach.    Cauchy Sequences  As we've seen, Georg Cantor Cantor, Georg began his career studying Fourier series and quickly moved on to more foundational matters in the theory of infinite sets.  But he did not lose his fascination with real analysis when he moved on. Like many mathematicians of his time, he realized the need to build from . He and his friend and mentor Richard Dedekind Dedekind, Richard (who's approach we will see in the next section) both found different ways to build from .  Cantor started with Cauchy sequences in .  That is, we consider the set of all Cauchy sequences of rational numbers. We would like to define each such sequence to be a real number. The goal should be clear. If is a sequence in which converges to then we will call the real number .  This probably seems a bit startling at first. There are a lot of numbers in (countably infinitely many, to be precise) and we are proposing putting all of them into a big bag, tying it up in a ribbon, and calling the whole thing . It seems a very odd thing to propose, but recall from the discussion in the previous section that we left the concept of number undefined. Thus if we can take any set of objects and define addition and multiplication in such a way that the field axioms are satisfied, then those objects are legitimately numbers. To show that they are, in fact, the real numbers we will also need the completeness property.  A bag full of rational numbers works as well as anything if we can define addition and multiplication appropriately.  Our immediate problem though is not addition or multiplication but uniqueness. If we take one sequence which converges to and define it to be , what will we do with all of the other sequences that converge to   Also, we have to be careful not to refer to any real numbers, like the square root of two for example, as we define the real numbers. This would be a circular and thus useless definition. Obviously though, we can refer to rational numbers, since these are the tools we'll be using.  The solution is clear. We take all sequences of rational numbers that converge to , throw them into our bag and call that  . Our bag is getting pretty full now.  But we need to do this without using because it is a real number. The following two definitions satisfy all of our needs.     sequences Cauchy sequences equivalent Let and be Cauchy sequences in . and are said to be equivalent if they satisfy the following property: For every , , there is a rational number such that for all , , .  We will denote equivalence by writing, .     sequences Cauchy sequences equivalent   Show that:               and        sequences Cauchy sequences real numbers as Cauchy sequences Every set of all equivalent Cauchy sequences defines a real number.    A very nice feature of Cantor's method is that it is very clear how addition and multiplication should be defined.     sequences Cauchy sequences addition and multiplication of If and then we define the following:   Addition:       Multiplication:          The notation used in Definition can be difficult to read at first, but basically it says that addition and multiplication are done component-wise. However since and consist of all equivalent sequences we have to take every possible choice of and , form the sum (product) ( ) and then show that all such sums (products) are equivalent. Otherwise addition (multiplication) is not well-defined: It would depend on which sequence we choose to represent and .     sequences Cauchy sequences addition of is well defined  addition of Cauchy sequences Let and be real numbers (that is, let them be sets of equivalent Cauchy sequences in ). If and are in and and are in then .       sequences Cauchy sequences zero as a Cauchy sequence Let be the set of Cauchy sequences in which are all equivalent to the sequence . Then .     From Problem it is clear that in forming we can choose any sequence in to represent and any sequence in to represent . (This is because any other choice will yield a sequence equivalent to .)  Thus we choose to represent and any element of , say , to represent . Then .  Since any other sequences taken from and respectively, will yield a sum equivalent to (see Problem ) we conclude that .      as Cauchy sequences identify the multiplicative identity  the number as a Cauchy sequence Identify the set of equivalent Cauchy sequences, , such that .     defined by Cauchy sequences  number field for Cauchy sequences  sequences Cauchy sequences field axioms for   Let , and be real numbers (equivalent sets of Cauchy sequences). Show that with addition and multiplication defined as above we have:                              We will not address this issue here, but you should give some thought to how this might be accomplished.   Once the existence of additive and multiplicative inverses is established the collection of all sets of equivalent Cauchy sequences, with addition and multiplication defined as above satisfy all of the field axioms. It is clear that they form a number field and thus deserve to be called numbers.  However this does not necessarily show that they form . We also need to show that they are complete in the sense of Chapter . It is perhaps not too surprising that when we build the real numbers using equivalent Cauchy sequences the most natural completeness property we can show is that if a sequence of real numbers is Cauchy then it converges.  However we are not in a position to show that Cauchy sequences in converge. To do this we would first need to show that these sets of equivalence classes of Cauchy sequences (real numbers) are linearly ordered.  Unfortunately showing the linear ordering, while not especially hard, is time consuming. So we will again invoke the prerogatives of the teacher and brush all of the difficulties aside with the assertion that it is straightforward to show that the real numbers as we have constructed them in this section are linearly ordered and are complete. If you would like to see this construction in full rigor we recommend the book, The Number System by H. A. Thurston .   Thurston first builds as we've indicated in this section. Then as a final remark he shows that the real numbers must be exactly the infinite decimals we saw in the previous section.     Dedekind Cuts  An advantage of building the reals via Cauchy sequences in the previous section is that once we've identified equivalent sequences with real numbers it is very clear how addition and multiplication should be defined.  On the other hand, before we can even start to understand that construction, we need a fairly strong sense of what it means for a sequence to converge and enough experience with sequences to be comfortable with the notion of a Cauchy sequence. Thus a good deal of high level mathematics must be mastered before we can even begin.  The method of Dedekind cuts first developed by Richard Dedekind Dedekind, Richard Dedekind cuts (though he just called them cuts ) in his 1872 book, Continuity and the Irrational Numbers shares the advantage of the Cauchy sequence method in that, once the candidates for the real numbers have been identified, it is very clear how addition and multiplication should be defined. It is also straightforward to show that most of the field axioms are satisfied.    Clear does not mean easy to do as we will see.   In addition, Dedekind's method also has the advantage that very little mathematical knowledge is required to get started. This is intentional. In the preface to the first edition of his book, Dedekind Dedekind, Richard states:   This memoir can be understood by anyone possessing what is usually called common sense; no technical philosophic, or mathematical, knowledge is in the least degree required. (quoted in )   While he may have overstated his case a bit, it is clear that his intention was to argue from very simple first principles just as Euclid did.  His starting point was the observation we made in Chapter : The rational number line is full of holes. More precisely we can cut the rational line in two distinct ways:   We can pick a rational number, . This choice divides all other rational numbers into two classes: Those greater than and those less than .    We can pick one of the holes in the rational number line. In this case all of the rationals fall into two classes: Those greater than the hole and those less.     But to speak of rational numbers as less than or greater than something that is not there is utter nonsense. We'll need a better (that is, a rigorous) definition.  As before we will develop an overall sense of this construction rather than a fully detailed presentation, as the latter would be far too long to include.  Our presentation will closely follow that of Edmund Landau's in his classic 1951 text Foundations of Analysis . We do this so that if you choose to pursue this construction in more detail you will be able to follow Landau's presentation more easily.     Dedekind Cut    Dedekind, Richard Dedekind cuts definition of  Dedekind, Richard Dedekind cuts A set of positive rational numbers is called a cut if   Take special notice that we are not using the negative rational numbers or zero to build our cuts. The reason for this will become clear shortly.      Property I  It contains a positive rational number but does not contain all positive rational numbers.    Property II  Every positive rational number in the set is less than every positive rational number not in the set.    Property III  There is no element of the set which is greater than every other element of the set.       Given their intended audiences, Dedekind Dedekind, Richard and Landau shied away from using too much notation. However, we will include the following for those who are more comfortable with the symbolism as it may help provide more perspective. Specifically the properties defining a Dedekind cut can be written as follows.     Property I   and .    Property II  If and , then . (Alternatively, if and , then .)    Property III  If , then such that .     Properties I-III really say that Dedekind cuts are bounded open intervals of rational numbers starting at . For example, is a Dedekind cut (which will eventually be the real number ). Likewise, is a Dedekind cut (which will eventually be the real number ). Notice that care must be taken not to actually refer to irrational numbers in the properties as the purpose is to construct them from rational numbers, but it might help to ground you to anticipate what will happen.  Take particular notice of the following three facts:   Very little mathematical knowledge is required to understand this definition. We need to know what a set is, we need to know what a rational number is, and we need to know that given two positive rational numbers either they are equal or one is greater.    The language Landau uses is very precise. This is necessary in order to avoid such nonsense as trying to compare something with nothing like we did a couple of paragraphs up.    We are only using the positive rational numbers for our construction. The reason for this will become clear shortly. As a practical matter for now, this means that the cuts we have just defined will (eventually) correspond to the positive real numbers.        Dedekind, Richard Dedekind cuts ordering of Let and be cuts. Then we say that is less than , and write if there is a rational number in which is not in .    Note that, in light of what we said prior to Definition (which is taken directly from Landau), we notice the following.     Dedekind, Richard Dedekind cuts ordering of Let and be cuts. Then if and only if .       Dedekind, Richard Dedekind cuts order properties  ordering Dedekind cuts Prove Theorem and use this to conclude that if and are cuts then exactly one of the following is true:    .     .     .       We will need first to define addition and multiplication for our cuts and eventually these will need to be extended to (once the non-positive reals have also been constructed). It will be necessary to show that the extended definitions satisfy the field axioms. As you can see there is a lot to do.  As we did with Cauchy sequences and with infinite decimals, we will stop well short of the full construction. If you are interested in Dedekind, Richard exploring the details of Dedekind's construction, Landau's book is very thorough and was written with the explicit intention that it would be accessible to students. In his Preface for the Teacher he says   I hope that I have written this book, after a preparation stretching over decades, in such a way that a normal student can read it in two days.   This may be stretching things. Give yourself at least a week and make sure you have nothing else to do that week.  Addition and multiplication are defined in the obvious way.     Addition on cuts    Dedekind, Richard Dedekind cuts addition of Let and be cuts. We will denote the set by .       Multiplication on cuts    Dedekind, Richard Dedekind cuts multiplication of positive cuts Let and be cuts. We will denote the set by .    If we are to have a hope that these objects will serve as our real numbers we must have closure with respect to addition and multiplication. We will show closure with respect to addition.     Closure with Respect to Addition    Dedekind, Richard Dedekind cuts closure of If and are cuts then is a cut.     We need to show that the set satisfies all three of the properties of a cut.     Property I  Let be any rational number in and let be a rational number not in . Then by Property II .  Let be any rational number in and let be a rational number not in . Then by Property II .  Thus since represents a generic element of and , it follows that .    Property II  We will show that the contrapositive of Property II is true: If and then .  First, let . Then there are and such that . Therefore , so that .  Therefore and . Therefore .    Property III  Let . We need to find , . Observe that for some and  .  Since is a cut, there is a rational number such that . Take . Then .         Dedekind, Richard Dedekind cuts multiplication of Show that if and are cuts then is also a cut.    At this point we have built our cuts and we have defined addition and multiplication for cuts. However, as observed earlier the cuts we have will (very soon) correspond only to the positive real numbers. This may appear to be a problem but it really isn't because the non-positive real numbers can be defined in terms of the positives, that is, in terms of our cuts. We quote from Landau :   These cuts will henceforth be called the positive numbers; . . .  We create a new number (to be read zero ), distinct from the positive numbers.  We also create numbers which are distinct from the positive numbers as well as distinct from zero, and which we will call negative numbers, in such a way that to each (I.e. to each positive number) we assign a negative number denoted by ( to be read minus ). In this, and will be considered as the same number (as equal) if and only if and are the same number.  The totality consisting of all positive numbers, of , and of all negative numbers, will be called the real numbers.   Of course it is not nearly enough to simply postulate the existence of the non-negative real numbers.  All we have so far is a set of objects we're calling the real numbers. For some of them (the positive reals -- that is, the cuts) we have defined addition and multiplication. These definitions will eventually turn out to correspond to the addition and multiplication we are familiar with.  However we do not have either operation for our entire set of proposed real numbers. Before we do this we need first to define the absolute value of a real number. This is a concept you are very familiar with and you have probably seen the following definition: Let . Then   Unfortunately we cannot use this definition because we do not yet have a linear ordering on so the statement is meaningless. Indeed, it will be our definition of absolute value that orders the real numbers. We must be careful.  Notice that by definition a negative real number is denoted with the dash ('-') in front. That is is positive while is negative. Thus if is any real number then one of the following is true:    for some ( is positive)     for some ( is negative)     .     We define absolute value as follows:     Dedekind, Richard Dedekind cuts absolute value Let as above. Then     With this definition in place it is possible to show that is linearly ordered. We will not do this explicitly. Instead we will simply assume that the symbols  , and have been defined and have all of the properties we have learned to expect from them.  We now extend our definitions of addition and multiplication from the positive real numbers (cuts) to all of them. Curiously, multiplication is the simpler of the two.     Multiplication    Dedekind, Richard Dedekind cuts multiplication of Let . Then     Notice that the case where and are both positive was already handled by Definition because in that case they are both cuts.  Next we define addition.     Addition    Dedekind, Richard Dedekind cuts addition of Let . Then .     Notice also that the fifth case refers to the addition as defined in the second case.   But wait! In the second and fourth cases of our definition we've actually defined addition in terms of subtraction. But we haven't defined subtraction yet! Oops!  This is handled with the definition below, but it illuminates very clearly the care that must be taken in these constructions. The real numbers are so familiar to us that it is extraordinarily easy to make unjustified assumptions.  Since the subtractions in the second and fourth cases above are done with positive numbers we only need to give meaning to the subtraction of cuts.     Dedekind, Richard Dedekind cuts subtraction of If , and are cuts then the expression is defined to mean .    Of course, there is the detail of showing that there is such a cut . (We warned you of the tediousness of all this.) Landau goes through the details of showing that such a cut exists. We will present an alternative by defining the cut directly (assuming ). To motivate this definition, consider something we are familiar with: . In terms of cuts, we want to say that the open interval from to  minus the open interval from to should give us the open interval from to . Taking elements from and subtracting elements from won't do it as we would have differences such as which is not in the cut . A moment's thought tells us that what we need to do is take all the elements from and subtract all the elements from , restricting ourselves only to those which are positive rational numbers. This prompts the following definition.     Dedekind, Richard Dedekind cuts as sets Let and be cuts with . Define as follows: .    To show that, in fact, , the following technical lemma will be helpful.    Let be a cut, and be positive rational numbers not in with , and let be any rational number. Then there exist positive rational numbers and with , and , such that , and .     Dedekind, Richard Dedekind cuts technical lemma for   Prove Lemma .    Since is a cut there exists . Let . We know that . Consider the midpoint . If this is in then relabel it as and relabel as . If it is not in then relabel it as and relabel as , etc.     Dedekind, Richard Dedekind cuts subtraction of   Let and be cuts with . Prove that .    It is pretty straightforward to show that . To show that , we let . Since , we have with . We can assume without loss of generality that . (Why?) Choose with . By the Lemma , there exists positive rational numbers and with , , , and . Show that .    We will end by saying that no matter how you construct the real number system, there is really only one. More precisely we have the following theorem which we state without proof.   In fact, not proving this result seems to be standard in real analysis references. Most often it is simply stated as we do here.      any complete, linearly ordered field is isomorphic to  fields any complete, linearly ordered field is isomorphic to . Any complete, linearly ordered field is isomorphic to .    Two linearly ordered number fields are said to be isomorphic if there is a one-to-one, onto mapping between them (such a mapping is called a bijection) which preserves addition, multiplication, and order. More precisely, if and are both linearly ordered fields, and is the mapping then              .     Remember that we warned you that these constructions were fraught with technical details that are not necessarily illuminating. Nonetheless, at this point, you have everything you need to show that the set of all real numbers as defined above is linearly ordered and satisfies the Least Upper Bound property.  But we will stop here in order, to paraphrase Descartes, to leave for you the joy of further discovery.   "
},
{
  "id": "def_NumberField",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_NumberField",
  "type": "Definition",
  "number": "13.2.1",
  "title": "Linear Ordering.",
  "body": "Linear Ordering  number field linearly ordered   A number field is said to be linearly ordered if there is a relation, denoted , on the elements of the field which satisfies all of the following for all , and in the field.     For all numbers and in the field, exactly one of the following holds:                       If , then for all in the field.    If , and , then .    If and then .      "
},
{
  "id": "p-1560",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#p-1560",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly ordered number field "
},
{
  "id": "problem-214",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#problem-214",
  "type": "Problem",
  "number": "13.2.2",
  "title": "",
  "body": " number field linearly ordered   Prove that the following must hold in any linearly ordered number field.      if and only if .    If and then .    For all , .     .       Show that the set of complex numbers ( ) is not a linearly ordered field.   "
},
{
  "id": "problem-215",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#problem-215",
  "type": "Problem",
  "number": "13.2.3",
  "title": "",
  "body": " defining infinite decimal addition   Define addition on infinite decimals in a manner that is closed.    Find an appropriate carry operation for our definition.   "
},
{
  "id": "def_EquivCauchySeq",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_EquivCauchySeq",
  "type": "Definition",
  "number": "13.2.4",
  "title": "",
  "body": "   sequences Cauchy sequences equivalent Let and be Cauchy sequences in . and are said to be equivalent if they satisfy the following property: For every , , there is a rational number such that for all , , .  We will denote equivalence by writing, .   "
},
{
  "id": "prob_EquivalentCauchySequences",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#prob_EquivalentCauchySequences",
  "type": "Problem",
  "number": "13.2.5",
  "title": "",
  "body": " sequences Cauchy sequences equivalent   Show that:               and    "
},
{
  "id": "def_RealsViaCauchy",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_RealsViaCauchy",
  "type": "Definition",
  "number": "13.2.6",
  "title": "",
  "body": "   sequences Cauchy sequences real numbers as Cauchy sequences Every set of all equivalent Cauchy sequences defines a real number.   "
},
{
  "id": "def_AddTimesViaCauchy",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_AddTimesViaCauchy",
  "type": "Definition",
  "number": "13.2.7",
  "title": "",
  "body": "   sequences Cauchy sequences addition and multiplication of If and then we define the following:   Addition:       Multiplication:         "
},
{
  "id": "prob_CauchyAdditionWellDefined",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#prob_CauchyAdditionWellDefined",
  "type": "Problem",
  "number": "13.2.8",
  "title": "",
  "body": "   sequences Cauchy sequences addition of is well defined  addition of Cauchy sequences Let and be real numbers (that is, let them be sets of equivalent Cauchy sequences in ). If and are in and and are in then .   "
},
{
  "id": "thm_ZeroInCauchySequences",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#thm_ZeroInCauchySequences",
  "type": "Theorem",
  "number": "13.2.9",
  "title": "",
  "body": "   sequences Cauchy sequences zero as a Cauchy sequence Let be the set of Cauchy sequences in which are all equivalent to the sequence . Then .   "
},
{
  "id": "proof-34",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#proof-34",
  "type": "Proof",
  "number": "13.2.2.1",
  "title": "",
  "body": " From Problem it is clear that in forming we can choose any sequence in to represent and any sequence in to represent . (This is because any other choice will yield a sequence equivalent to .)  Thus we choose to represent and any element of , say , to represent . Then .  Since any other sequences taken from and respectively, will yield a sum equivalent to (see Problem ) we conclude that .  "
},
{
  "id": "problem-218",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#problem-218",
  "type": "Problem",
  "number": "13.2.10",
  "title": "",
  "body": "   as Cauchy sequences identify the multiplicative identity  the number as a Cauchy sequence Identify the set of equivalent Cauchy sequences, , such that .   "
},
{
  "id": "problem-219",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#problem-219",
  "type": "Problem",
  "number": "13.2.11",
  "title": "",
  "body": " defined by Cauchy sequences  number field for Cauchy sequences  sequences Cauchy sequences field axioms for   Let , and be real numbers (equivalent sets of Cauchy sequences). Show that with addition and multiplication defined as above we have:                            "
},
{
  "id": "def_dedekind-cuts",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_dedekind-cuts",
  "type": "Definition",
  "number": "13.2.12",
  "title": "",
  "body": "   Dedekind Cut    Dedekind, Richard Dedekind cuts definition of  Dedekind, Richard Dedekind cuts A set of positive rational numbers is called a cut if   Take special notice that we are not using the negative rational numbers or zero to build our cuts. The reason for this will become clear shortly.      Property I  It contains a positive rational number but does not contain all positive rational numbers.    Property II  Every positive rational number in the set is less than every positive rational number not in the set.    Property III  There is no element of the set which is greater than every other element of the set.      "
},
{
  "id": "def_dedekind-cuts-ordering",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_dedekind-cuts-ordering",
  "type": "Definition",
  "number": "13.2.13",
  "title": "",
  "body": "   Dedekind, Richard Dedekind cuts ordering of Let and be cuts. Then we say that is less than , and write if there is a rational number in which is not in .   "
},
{
  "id": "thm_OrderingCuts",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#thm_OrderingCuts",
  "type": "Theorem",
  "number": "13.2.14",
  "title": "",
  "body": "   Dedekind, Richard Dedekind cuts ordering of Let and be cuts. Then if and only if .   "
},
{
  "id": "problem-220",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#problem-220",
  "type": "Problem",
  "number": "13.2.15",
  "title": "",
  "body": "   Dedekind, Richard Dedekind cuts order properties  ordering Dedekind cuts Prove Theorem and use this to conclude that if and are cuts then exactly one of the following is true:    .     .     .      "
},
{
  "id": "def_dedekind-cuts-addition",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_dedekind-cuts-addition",
  "type": "Definition",
  "number": "13.2.16",
  "title": "",
  "body": "   Addition on cuts    Dedekind, Richard Dedekind cuts addition of Let and be cuts. We will denote the set by .   "
},
{
  "id": "def_dedekind-cuts-multiplication",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_dedekind-cuts-multiplication",
  "type": "Definition",
  "number": "13.2.17",
  "title": "",
  "body": "   Multiplication on cuts    Dedekind, Richard Dedekind cuts multiplication of positive cuts Let and be cuts. We will denote the set by .   "
},
{
  "id": "thm_dedekind-cuts-closure",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#thm_dedekind-cuts-closure",
  "type": "Theorem",
  "number": "13.2.18",
  "title": "",
  "body": "   Closure with Respect to Addition    Dedekind, Richard Dedekind cuts closure of If and are cuts then is a cut.   "
},
{
  "id": "proof-35",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#proof-35",
  "type": "Proof",
  "number": "13.2.3.1",
  "title": "",
  "body": " We need to show that the set satisfies all three of the properties of a cut.     Property I  Let be any rational number in and let be a rational number not in . Then by Property II .  Let be any rational number in and let be a rational number not in . Then by Property II .  Thus since represents a generic element of and , it follows that .    Property II  We will show that the contrapositive of Property II is true: If and then .  First, let . Then there are and such that . Therefore , so that .  Therefore and . Therefore .    Property III  Let . We need to find , . Observe that for some and  .  Since is a cut, there is a rational number such that . Take . Then .     "
},
{
  "id": "problem-221",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#problem-221",
  "type": "Problem",
  "number": "13.2.19",
  "title": "",
  "body": "   Dedekind, Richard Dedekind cuts multiplication of Show that if and are cuts then is also a cut.   "
},
{
  "id": "def_absolute-value",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_absolute-value",
  "type": "Definition",
  "number": "13.2.20",
  "title": "",
  "body": "   Dedekind, Richard Dedekind cuts absolute value Let as above. Then    "
},
{
  "id": "def_dedekind-multiplication",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_dedekind-multiplication",
  "type": "Definition",
  "number": "13.2.21",
  "title": "",
  "body": "   Multiplication    Dedekind, Richard Dedekind cuts multiplication of Let . Then    "
},
{
  "id": "def_dedekind-addition",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_dedekind-addition",
  "type": "Definition",
  "number": "13.2.22",
  "title": "",
  "body": "   Addition    Dedekind, Richard Dedekind cuts addition of Let . Then .   "
},
{
  "id": "def_CutSubtraction",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_CutSubtraction",
  "type": "Definition",
  "number": "13.2.23",
  "title": "",
  "body": "   Dedekind, Richard Dedekind cuts subtraction of If , and are cuts then the expression is defined to mean .   "
},
{
  "id": "def_SubtractionOfCutsAsSets",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#def_SubtractionOfCutsAsSets",
  "type": "Definition",
  "number": "13.2.24",
  "title": "",
  "body": "   Dedekind, Richard Dedekind cuts as sets Let and be cuts with . Define as follows: .   "
},
{
  "id": "lem_Technical",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#lem_Technical",
  "type": "Lemma",
  "number": "13.2.25",
  "title": "",
  "body": "  Let be a cut, and be positive rational numbers not in with , and let be any rational number. Then there exist positive rational numbers and with , and , such that , and .   "
},
{
  "id": "problem-222",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#problem-222",
  "type": "Problem",
  "number": "13.2.26",
  "title": "",
  "body": " Dedekind, Richard Dedekind cuts technical lemma for   Prove Lemma .    Since is a cut there exists . Let . We know that . Consider the midpoint . If this is in then relabel it as and relabel as . If it is not in then relabel it as and relabel as , etc.   "
},
{
  "id": "problem-223",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#problem-223",
  "type": "Problem",
  "number": "13.2.27",
  "title": "",
  "body": " Dedekind, Richard Dedekind cuts subtraction of   Let and be cuts with . Prove that .    It is pretty straightforward to show that . To show that , we let . Since , we have with . We can assume without loss of generality that . (Why?) Choose with . By the Lemma , there exists positive rational numbers and with , , , and . Show that .   "
},
{
  "id": "thm_R-is-R",
  "level": "2",
  "url": "Epilogues-BuildRealNumbers.html#thm_R-is-R",
  "type": "Theorem",
  "number": "13.2.28",
  "title": "",
  "body": "   any complete, linearly ordered field is isomorphic to  fields any complete, linearly ordered field is isomorphic to . Any complete, linearly ordered field is isomorphic to .   "
},
{
  "id": "references-1",
  "level": "1",
  "url": "references-1.html",
  "type": "References",
  "number": "",
  "title": "Bibliography",
  "body": " Bibliography  Robert E. Bradley and C. Edward Sandifer. Cauchy's Cours d'analyse : An Annotated Translation . Sources and Studies in the History of Mathematics and Physical Sciences. Springer, 2009.  William Dunham. Journey Through Genius . Penguin Books, 1990.  John Franks. Cantor's other proofs that is uncountable. Mathematics Magazine , 83(4):283--289, October 2010.  Judith Grabiner. The Origins of Cauchy's Rigorous Calculus . MIT Press, Cambridge MA, 1981.  Stephen Hawking, editor. God Created the Integers: The Mathematical Breakthroughs that Changed History . Running Press, Philadelphia, London, 2005.  H. Jahnke, editor. A History of Analysis . AMS Publications, Providence RI, 2003.  Edmund Landau. Foundations of Analysis . Chelsea Publishing Company, New York, NY, 1966. Translated by F. Steinhardt, Columbia University.  Thomas Levenson. Newton and the Counterfeiter . Houghton Mifflin Harcourt, 2009.  Reviel Netz and William Noel. The Archimedes Codex . Da Capo Press, 2007.  Isaac Newton. Sir Isaac Newton's Two Treatises of the Quadrature of Curves and Analysis by Equation of an Infinite Number of Terms, Explained . Society for the Encouragement of Learning, 1745. Translated from Latin by John Stewart, A. M. Professor of Mathematicks in the Marishal College and University of Aberdeen.  J. J. O'Connor and E. F. Robertson. The Brachistochrone Problem . http:\/\/www-gap.dcs.st-and.ac.uk\", MacTutor History of Mathematics archive   Abraham Robinson. Non-standard analysis . North-Holland Pub. Co., 1974.  Lucio Russo, translated by Silvio Levy. The Forgotten Revolution: How Science Was Born in 300 BC and Why It Had to Be Reborn . Springer, 1996.  C. Edward Sandifer. The Early Mathematics of Leonard Euler . Spectrum, 2007. ISBN 10: 0883855593, ISBN 13: 978-0883855591.  Dirk Struik, editor. Source Book in Mathematics, 1200-1800 . Harvard University Press, Cambridge, MA, 1969.  H. A. Thurston. The Number System . Blackie and Son Limited, London, Glassgow, 1956.  "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
