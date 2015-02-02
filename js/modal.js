// create the hashtag modals
document.getElementById('planning').onclick = function(){
	swal({
  title: 'Planning',
  width: 600,
  confirmButtonText: 'Ok! I found what interests me.',
  html:
    '<h5 style="margin-bottom: -5px;">Expert Review<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Review a site or an app by verifying it through a series of feature checkpoints.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a href="http://www.uxmatters.com/mt/archives/2014/01/conducting-expert-reviews-what-works-best.php" target="_blank"> Conducting Expert Reviews </a>' + ' | ' +'<a href="http://www.smashingmagazine.com/2011/12/16/a-guide-to-heuristic-website-reviews/" target="_blank"> A Guide to Heursitic Website Reviews </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Stakeholder Workshop<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Organise a meeting with the stakeholders involved. Lock yourself with them in a room and start understanding the product.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.uxmatters.com/mt/archives/2010/05/achieving-design-focus-an-approach-to-design-workshops.php"> Achieving Design Focus: An Approach to Design Workshops </a>' + ' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Competitor Analysis<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">You are not alone. There are competitors everywhere. Try to learn what makes them tick so you can be one step ahead.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.uxmatters.com/mt/archives/2009/04/differentiating-your-design-a-visual-approach-to-competitive-reviews.php"> A Visual Approach to Competitive Reviews </a>' + ' | ' +'<a href="http://danforthmedia.com/pages/2014/03/01/conducting-a-solid-ux-competitive-analysis/" target="_blank"> Conducting a solid UX Competitive Analysis </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Requirements Analysis<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Do not dare to open Photoshop and start designing. Try to know the product, the client, the user by hand.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful link: ' + '<a href="http://usabilitygeek.com/requirements-gathering-user-experience-pt1/" target="_blank"> Requirements Gathering: A Step By Step Approach For A Better User Experience </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Stakeholder Interview<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">As soon as possible try to ask questions and get answers from the major stakeholder involved.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.uxapprentice.com/resources/stakeholder-interview-template/"> UX Apprentice Interview Template </a>' + ' | ' +'<a target="_blank" href="http://www.userfocus.co.uk/articles/conducting-an-effective-stakeholder-interview.html"> Conducting an Effective Stakeholder Interview </a>' + ' | ' +'<a target="_blank" href="http://boxesandarrows.com/a-stakeholder-interview-checklist/"> A Stakeholder Interview Checklist </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">(De)briefing<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">First disect the brief. If no such thing exists, create one with the client.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://library.iasummit.org/podcasts/the-user-experience-brief-what-why-and-how/"> The User Experience Brief: What, Why and How </a>' + ' | ' +'<a target="_blank" href="http://www.usabilitycounts.com/2011/07/06/a-day-in-the-life-of-a-ux-designer-part-ii-develop-a-design-brief/"> A Day in the Life of a UX Designer: Develop a Design Brief </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' 
});
};


document.getElementById('research').onclick = function(){
	swal({
  title: 'Research',
  width: 600,
  confirmButtonText: 'Ok! I found what interests me.',
  html:
    '<h5 style="margin-bottom: -5px;">Ethnographic Research<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">You can tell a lot about a person based on his/her culture and social or group behavior. For example did you know that in Japan, purple is the color of wealth?</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://methodsofdiscovery.net/?q=node/19"> Defining Ethnography and Culture </a>' +  '</p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Market Research<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Try to gain insight from your potential audience from the early start. You might get it right or be way ahead of your time.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://johnnyholland.org/2011/09/what-i-bring-to-ux-from-market-research/"> What I Bring to UX From … Market Research </a>'  +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Photo Ethnography<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">A picture is worth a 1000 words and it works very well if you want to understand more about the people and culture they belong to. Sometimes the eye can simply miss subtle details.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.qualitative-research.net/index.php/fqs/article/view/1310/2810"> Photo-ethnography by People Living in Poverty Near the Northern Border of Mexico </a>'  +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Visual Anthropology<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Visual Anthropology gathers more than you first think; it is the study of all visuals and representations (dancing, museums, arts, tattoo, sculptures etc.)</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://astro.temple.edu/~ruby/ruby/cultanthro.html"> Visual Anthropology (In Encyclopedia of Cultural Anthropology) </a>'  +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Demographics<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Age, sex, location and many more, please. Know your user, starting with the basic raw data.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.uie.com/articles/recruiting_participants/"> Avoiding Demographics When Recruiting Participants: An Interview with Dana Chisnell </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Focus Groups<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Gather around a small group of people and find out their opinions, perceptions, beliefs, feelings and attitudes towards your product. </p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.usability.gov/how-to-and-tools/methods/focus-groups.html"> Usability.gov Focus Groups </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Psychographics<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">You think demographics are enough? You can find much more if you describe the personality/lifestyle/atitude of your average to the power user. </p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://mashable.com/2011/06/30/psychographics-marketing/"> The End of Demographics: How Marketers Are Going Deeper With Personal Data </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Documentation<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Document and store all your work. It might help you spare you some headaches in the future.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="https://evernote.com/"> Evernote </a>' + ' | ' +'<a target="_blank" href="https://www.google.com/drive/"> Google Drive </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">SEO & Analytics<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">It is important to know how the user tracks down your product and how he/she spends their time with it.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="www.google.com/analytics"> Google Analytics </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Mobile Assesment<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Do you need to keep all desktop features on mobile? Well, choose which one stays and which one goes using this technique.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://alistapart.com/article/organizing-mobile/"> Organizing Mobile </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Observational Research<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Grab a pen and paper and start noting what the users are doing with your product.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.quirks.com/articles/a1997/19971208.aspx?searchID=625728"> Seven rules for observational research: how to watch people do stuff  </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Surveys<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Need to find opinions fast? Make a form, write the questions and share. Then you wait and wait and wait hoping to recieve answers.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://uxmastery.com/better-user-research-through-surveys/"> Better User Research Through Surveys </a>' + ' | ' +'<a target="_blank" href="https://blog.mozilla.org/ux/2012/10/writing-surveys-that-work/"> Writing Surveys That Work </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' 
});
};

document.getElementById('exploration').onclick = function(){
  swal({
  title: 'Exploration',
  width: 600,
  confirmButtonText: 'Ok! I found what interests me.',
  html:
		'<h5 style="margin-bottom: -5px;">Persona<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Create a representation of your users - the ones that will interact with your product.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="www.smashingmagazine.com/2014/08/06/a-closer-look-at-personas-part-1/"> A closer look at Personas (this is only part 1)</a>' + ' | ' +'<a target="_blank" href="http://uxmag.com/articles/persona-grata"> Persona Grata: Welcoming users into the interaction design process </a>' + ' | ' +'<a target="_blank" href="http://blankdots.com/open/personas/"> Blankdots Persona Template </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">User Flow<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Describe the necessary steps the user has to take to finish a logical task. How does he/she get from point A to point B?</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="https://signalvnoise.com/posts/1926-a-shorthand-for-designing-ui-flows"> A Shorthand for Designing UI Flows </a>' + ' | ' +'<a target="_blank" href="http://www.smashingmagazine.com/2012/01/04/stop-designing-pages-start-designing-flows/"> Stop designing pages start designing flows </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Storyboards<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Draw a series of panels and describe the user`s experience (both in and out of the product) using rough sketches (stick figures, star people etc.).</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://johnnyholland.org/2011/10/storyboarding-ux-part-1-an-introduction/"> Storyboarding & UX (this is only part 1, find the rest) </a>' + ' | ' +'<a target="_blank" href="http://uxmag.com/articles/storyboarding-in-the-software-design-process"> Storyboarding in the Software Design Process </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Journey Maps<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Explain the full journey the user has to take with your product. Both online and offline. Track down what makes them happy (don`t forget the pain points) and list the artefacts they encounter.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.adaptivepath.com/ideas/the-anatomy-of-an-experience-map/"> The Anatomy of an Experience Map </a>' + ' | ' +'<a target="_blank" href="http://www.ux-lady.com/experience-maps-user-journey-and-more-exp-map-layout/"> Experience Maps, User Journey and more </a>'+ ' | ' + '<a target="_blank" href="http://sixrevisions.com/user-experience-ux/customer-journey-maps/"> Improving UX with Customer Journey Maps </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">User Stories<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">List what users want to do in order to achieve a certain outcome. For instance, I want to connect with Facebook because it is easy and I save time.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.usabilitycounts.com/2013/10/11/why-i-love-user-stories/"> Why I love User Stories </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Acceptance Criteria<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Each user story must accomplish a series of criterias in order to be valid and have the desired outcome.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.agilelearninglabs.com/2013/04/user-story-splitting-three/"> Splitting User Stories with Acceptance Criteria </a>' + ' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Questions, Options, Criteria (QOC)<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Need to make a design decision? Start asking questions, write possible options and write the criteria for each one.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.slideshare.net/koenvanturnhout/how-to-perform-a-qoc-analysis"> How to perform a QOC analysis </a>' + ' | ' +'<a target="_blank" href="http://www.sigchi.org/chi95/proceedings/papers/tcy_bdy.htm"> Design Space Analysis as "Training Wheels" in a Framework for Learning User Interface Design </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>'
});
};


document.getElementById('testing').onclick = function(){
	swal({
  title: 'Testing',
  width: 600,
  confirmButtonText: 'Ok! I found what interests me.',
  html:
    '<h5 style="margin-bottom: -5px;">A/B Testing<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">This is the client favorite especially when they do not know what to choose. </p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful link: ' + '<a target="_blank" href="http://www.smashingmagazine.com/2010/06/24/the-ultimate-guide-to-a-b-testing/"> The Ultimate Guide to A/B testing </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Guerilla Testing<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Grab your design, head over to a coffee shop and test your product there. Don`t forget to buy them a drink. </p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful link: ' + '<a target="_blank" href="http://www.uxbooth.com/articles/the-art-of-guerrilla-usability-testing/"> The Art of Guerrilla Usability Testing </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Lab Testing<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Lights! Camera! Action! Record and heatmap your user`s behavior in a controlled environment.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful link: ' + '<a href="http://www.stakelon.com/2014/01/building-a-discount-user-testing-lab-part-1/"> Building A User Testing Lab, Part 1 (Keep in mind,there are 3 parts in total) </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Remote testing<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Let other do the job jor you. Test your designs or prototypes using remote tools.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.nngroup.com/articles/remote-usability-tests/"> Remote Usability Tests: Moderated and Unmoderated </a>' + ' | ' +'<a target="_blank" href="http://remoteresear.ch/tools/"> Remote Usability and UX Research Tools </a>' +' </p>'
});
};

document.getElementById('design').onclick = function(){
	swal({
  title: 'Design',
  width: 600,
  confirmButtonText: 'Ok! I found what interests me.',
  html:
		'<h5 style="margin-bottom: -5px;">Sketching<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Grab a pencil. Grab a piece of paper. Start doodling and no "I cannot draw" excuses. </p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.smashingmagazine.com/2011/12/13/the-messy-art-of-ux-sketching/"> The Messy Art of UX Sketching </a>' + ' | ' +'<a target="_blank" href="https://medium.com/@moonshinedesign/ux-sketching-4deda906c915"> UX Sketching - Why is it necessary? </a>' + ' | ' +'<a target="_blank" href="http://www.uxbooth.com/articles/tools-for-sketching-user-experiences/"> Tools for Sketching User Experiences </a>' + ' | ' +'<a target="_blank" href="http://www.uistencils.com/"> UI Stencils </a>' + ' | ' +'<a target="_blank" href="http://www.slideshare.net/mariusursache/marius-ursache-sketching-prototyping"> Sketching and Prototyping (Slideshare) </a>' +' </p>'+
    '<small>UX Recipe Template: ' + '<a href="http://pxdotpt.com/blog/2014/11/16/freebie-2-smartwatch-templates" target="_blank"> Try out my Moto360 and Apple Watch smart watch sketching templates</a>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Wireframes<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Go beyond sketches and start creating the skeleton of your product. Stay away as much as possible from `coloring` it. That is for another step.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.adobe.com/products/illustrator.html"> Adobe Illustrator </a>' + ' | ' +'<a target="_blank" href="http://www.axure.com/"> Axure RP </a>'+ ' | ' +'<a target="_blank" href="https://balsamiq.com/"> Balsamiq </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Styleguide<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Dress your site/product appropriately. In order to keep a proper level of consistency each asset/corner/stone must be designed.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://uxmag.com/articles/the-elements-of-a-style-guide"> The Elements of a Style Guide </a>' + ' | ' +'<a target="_blank" href="http://bradfrost.com/blog/post/atomic-web-design/"> Atomic Design </a>'  + ' | ' +'<a target="_blank" href="http://codeforamerica.clearleft.com/"> CodeForAmerica Style Guide by Clearleft </a>'+' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Mockups<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Create a visual representation of your product that it is close to the real thing.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.adobe.com/products/photoshop.html"> Adobe Photoshop </a>' + ' | ' +'<a target="_blank" href="http://bohemiancoding.com/sketch/"> Sketch </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Style Tiles<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Organise your product`s visual style into tiles. Focus on the main things that need to be styled (colors, typography, controls etc.).</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful link: ' + '<a href="http://styletil.es/"> styleti.es </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' 
});
};

document.getElementById('information').onclick = function(){
	swal({
  title: 'Information Architecture',
  width: 600,
  confirmButtonText: 'Ok! I found what interests me.',
  html:
	   '<h5 style="margin-bottom: -5px;">Sitemap<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Sitemaps show the structure of your product/app/website. They can be represented both visual (diagrams) or text based (often using spreadsheets).</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.jjg.net/ia/visvocab/"> A visual vocabulary for describing information architecture and interaction design </a>'  +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Card Sorting<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Organise your information using cards. Grouped them in order to achieve the right structure. </p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.smashingmagazine.com/2014/10/20/improving-information-architecture-card-sorting-beginners-guide/"> Improving Your Information Architecture With Card Sorting: A Beginner’s Guide </a>' + ' | ' +'<a target="_blank" href="https://www.interaction-design.org/encyclopedia/card_sorting.html"> IDF Card Sorting </a>' + ' | ' +'<a href="http://www.nngroup.com/articles/card-sorting-how-many-users-to-test/"> Card Sorting: How many users to test </a>' + ' | ' +'<a target="_blank" href="http://boxesandarrows.com/card-sorting-a-definitive-guide/"> Card Sorting: A definitive guide </a>' + ' | ' +'<a target="_blank" href="https://trello.com/"> Trello </a>' +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Content Audit<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Check all the information and evaluate it. It helps answer the following question: Is the current content any good?</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://uxmastery.com/how-to-conduct-a-content-audit/"> How to Conduct a Content Audit</a>'  +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Content Inventory<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Store and log all the product`s content. It will help you track changes and it works in tandem with Content Audit. Inventory represents the "What", while audit is the "Why".</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a href="http://www.adaptivepath.com/ideas/doing-content-inventory/"> Doing a Content Inventory (Or, A Mind-Numbingly Detailed Odyssey Through Your Web Site) </a>' + ' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Brainstorming<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Grab your team and start discussing ideas, but always keep in mind: no idea is left behind and no idea is bad. Everyone contributes.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.inspireux.com/2013/07/18/tips-for-structuring-better-brainstorming-sessions/"> Tips for structuring better brainstorming sessions </a>' + ' | ' +'<a target="_blank" href="http://www.smashingmagazine.com/2013/12/16/using-brainwriting-for-rapid-idea-generation/"> Using Brainwriting for Rapid Idea Generation </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Organization Schemes<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Organize your content, but also create relationships between each solid piece. /p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.usability.gov/how-to-and-tools/methods/organization-schemes.html"> Usability.gov Organization Schemes </a>' + ' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Organization Structure<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">It takes two to tango. It takes more to organize. Structures help define how the content relationship is defined: hierarchical, sequential or matrix. </p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://www.usability.gov/how-to-and-tools/methods/organization-structures.html"> Usability.gov Organizational Structure </a>'  +' </p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">DoGo Mapping<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">A more different approach from the classic map. To keep it short: DO something that makes you GO somewhere else.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a target="_blank" href="http://uxmag.com/articles/adapting-information-architecture-for-lean-and-agile-environments-with-dogo-mapping"> Adapting Information Architecture for Lean and Agile Environments with DoGo Mapping </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>'
   });
};


document.getElementById('prototyping').onclick = function(){
	swal({
  title: 'Prototyping',
  width: 600,
  confirmButtonText: 'Ok! I found what interests me.',
  html:
    '<h5 style="margin-bottom: -5px;">Paper Prototyping<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Remember those sketches? Well, have you tried to tape them to a phone and interact with them.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a href="http://alistapart.com/article/paperprototyping" target="_blank"> A List Apart Paper Prototyping </a>' + ' | ' +'<a href="https://popapp.in/" target="_blank"> POP App </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">HTML Demo<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Use your HTML/CSS skills to create something `tangible`. Link pages and present a flow. Add CSS3 animations/transitions and you are Man/Woman of the Day.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful link: ' + '<a href="http://capcloud.com/post/45915556334/the-best-framework-for-ux-prototyping-in-html" target="_blank"> Best Frameworks for UX Prototyping (Bootstrap, Foundation, Skeleton) </a>' + '</p>'+
    '<h5 style="margin-bottom: -5px; margin-top:20px;">IXD Prototyping<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Bring your designs to life and create digital prototypes. Say goodbye to static approaches. </p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful links: ' + '<a href="www.invisionapp.com" target="_blank"> Invision </a>' + ' | ' +'<a target="_blank" href="https://marvelapp.com"> Marvel App </a>'+ ' | ' +'<a target="_blank" href="https://www.flinto.com/"> Flinto </a>'+ ' | ' +'<a target="_blank" href="https://proto.io/"> Proto </a>'+' </p>'+
    '<h5 style="margin-bottom: -5px;">Mobile Showcase<h5>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Either responsive or a standalone app, your product deserves to be the highlight of the day. Make it come alive.</p>' +
    '<p style="margin-bottom: 5px; font-size: 14px">Useful link: ' + '<a href="http://www.pixate.com/" target="_blank"> Pixate</a>'+', but also try InVision, Marvel etc. (see above)' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>'
});
};


