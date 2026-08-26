const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('is-open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
	menuToggle.querySelector('b').textContent = isOpen ? 'Close menu' : 'Open menu';
});

siteNav.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		siteNav.classList.remove('is-open');
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.querySelector('b').textContent = 'Open menu';
	});
});

const credentials = [
	{ title: 'IBM AI Foundations for Business', issuer: 'IBM', provider: 'Coursera', category: 'ai', categoryLabel: 'AI & Data', type: 'Online Specialization', date: 'August 19, 2026', credentialId: 'KFX36SWFDTXW', verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/KFX36SWFDTXW', documentPath: 'IBM AI Foundations for Business.pdf', description: 'Foundational learning connecting artificial intelligence with business thinking and opportunity.', featured: true },
	{ title: 'Entrepreneurship: Launching an Innovative Business', issuer: 'University of Maryland, College Park', provider: 'Coursera', category: 'entrepreneurship', categoryLabel: 'Entrepreneurship', type: 'Online Specialization', date: 'August 19, 2026', credentialId: 'EU8IPJJR6BKW', verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/EU8IPJJR6BKW', documentPath: 'Entrepreneurship - Launching an Innovative Business, University of Maryland.pdf', description: 'A structured entrepreneurship learning path focused on launching and developing an innovative business.', featured: true },
	{ title: 'Foundations of Project Management', issuer: 'Google', provider: 'Coursera', category: 'project-management', categoryLabel: 'Project Management', type: 'Online Course', date: 'August 19, 2026', credentialId: 'JJVHAFS8KOWI', verificationUrl: 'https://www.coursera.org/account/accomplishments/records/JJVHAFS8KOWI', documentPath: 'Foundations of Project Management, Google.pdf', description: 'Professional learning in project management foundations, planning, and execution.', featured: true },
	{ title: 'Generative AI: Introduction and Applications', issuer: 'IBM', provider: 'Coursera', category: 'ai', categoryLabel: 'AI & Data', type: 'Online Course', date: 'August 19, 2026', credentialId: 'IYL6W4Z6U914', verificationUrl: 'https://www.coursera.org/account/accomplishments/records/IYL6W4Z6U914', documentPath: 'Generative AI - Introduction and Applications, IBM.pdf', description: 'An introduction to generative AI concepts and their practical applications.', featured: true },
	{ title: 'Introduction to Artificial Intelligence (AI)', issuer: 'IBM', provider: 'Coursera', category: 'ai', categoryLabel: 'AI & Data', type: 'Online Course', date: 'August 19, 2026', credentialId: '4XJCJOT0TXU8', verificationUrl: 'https://coursera.org/verify/4XJCJOT0TXU8', documentPath: 'Introduction to Artificial Intelligence (AI), IBM.pdf', description: 'An accessible introduction to artificial intelligence and its role in technology.', featured: false },
	{ title: 'Developing Innovative Ideas for New Companies: The First Step in Entrepreneurship', issuer: 'University of Maryland, College Park', provider: 'Coursera', category: 'innovation', categoryLabel: 'Innovation', type: 'Online Course', date: 'August 19, 2026', documentPath: 'Developing Innovative Ideas for New Companies - The first step in Entrepreneurship, 19, August, University of Maryland.pdf', description: 'Learning focused on developing and assessing innovative ideas for new companies.', featured: false },
	{ title: 'Innovation for Entrepreneurs: From Idea to Marketplace', issuer: 'University of Maryland, College Park', provider: 'Coursera', category: 'innovation', categoryLabel: 'Innovation', type: 'Online Course', date: 'August 19, 2026', documentPath: 'Innovation for Entrepreneurs - From Idea to, August 19, University of Maryland.pdf', description: 'Exploring how entrepreneurial ideas can progress toward a marketplace.', featured: false },
	{ title: 'Entrepreneurship Capstone', issuer: 'University of Maryland, College Park', provider: 'Coursera', category: 'entrepreneurship', categoryLabel: 'Entrepreneurship', type: 'Online Course', date: 'August 19, 2026', documentPath: 'Entrepreneurship Capstone, 19, August. University of Maryland.pdf', description: 'A capstone learning experience within the University of Maryland entrepreneurship pathway.', featured: false },
	{ title: 'New Venture Finance: Startup Funding for Entrepreneurship', issuer: 'University of Maryland, College Park', provider: 'Coursera', category: 'entrepreneurship', categoryLabel: 'Entrepreneurship', type: 'Online Course', date: 'August 19, 2026', documentPath: 'New Venture Finance - Startup Funding For Entrepreneurs.pdf', description: 'Professional learning about startup funding and new venture finance.', featured: false },
	{ title: 'Nano Tips for Effective Listening for Leaders with India Martin', issuer: 'LinkedIn Learning', provider: 'LinkedIn Learning', category: 'digital-media', categoryLabel: 'Digital & Media', type: 'Online Course', date: 'August 2026', credentialId: '32973d949265ecab63b516bf65df6bdac0d47724faefa433aef9d370d708b0fa', verificationUrl: 'https://www.linkedin.com/learning/certificates/32973d949265ecab63b516bf65df6bdac0d47724faefa433aef9d370d708b0fa', documentPath: 'CertificateOfCompletion_Nano Tips for Effective Listening for Leaders with India Martin.pdf', description: 'Learning focused on effective listening and leadership communication.', featured: false },
	{ title: 'Mistakes to Avoid in Performance Marketing', issuer: 'LinkedIn Learning', provider: 'LinkedIn Learning', category: 'digital-media', categoryLabel: 'Digital & Media', type: 'Online Course', date: 'August 2026', credentialId: 'ae2ba814c044874d3c7f5842cb2fd34f7880c872256bc033063d205fde836ee0', verificationUrl: 'https://www.linkedin.com/learning/certificates/ae2ba814c044874d3c7f5842cb2fd34f7880c872256bc033063d205fde836ee0', documentPath: 'CertificateOfCompletion_Mistakes to Avoid in Performance Marketing (1).pdf', description: 'Professional learning in performance marketing awareness and common pitfalls.', featured: false },
	{ title: 'Nano Tips to Ditch Self-Doubt with Shade Zahrai', issuer: 'LinkedIn Learning', provider: 'LinkedIn Learning', category: 'professional-training', categoryLabel: 'Professional Training', type: 'Online Course', date: 'August 2026', credentialId: '0149cb648b00403c70f6ed6417a68a5970a52de669176351cf1654a4354bfdfb', verificationUrl: 'https://www.linkedin.com/learning/certificates/0149cb648b00403c70f6ed6417a68a5970a52de669176351cf1654a4354bfdfb', documentPath: 'CertificateOfCompletion_Nano Tips to Ditch SelfDoubt with Shade Zahrai.pdf', description: 'Professional learning focused on confidence and personal development.', featured: false },
	{ title: 'Market Research for Entrepreneur', issuer: 'Orange Digital Center, Liberia', provider: 'Training record', category: 'professional-training', categoryLabel: 'Professional Development', type: 'Entrepreneurship Training', date: 'August 2026', status: 'Completed', documentPath: 'Market Research For Entrepreneur.pdf', description: 'Training in field observation, mini-surveys, and demand validation. Public listing uses a text record because the supporting files may contain private correspondence.', featured: false },
	{ title: 'Media MasterClass for Entrepreneur', issuer: 'Orange Digital Center, Liberia', provider: 'Training record', category: 'professional-training', categoryLabel: 'Professional Development', type: 'Media / Communication Training', date: 'Completed · 2026', status: 'Completed', documentPath: 'Media Master Class...pdf', description: 'Professional development in media and communication for entrepreneurs. Public listing uses a text record rather than publishing the source correspondence.', featured: false }
];

const services = [
	{ number: '01', category: 'Business & Research', categoryNumber: '01', categoryIntro: 'Helping early-stage ideas become clearer, better researched, and more structured.', title: 'Market & Business Research', description: 'Research support for entrepreneurs and small businesses that need a clearer understanding of markets, customers, competitors, opportunities, and important business questions.', ideal: 'Entrepreneurs and small businesses with a business question', support: 'Market research · customer research · competitor research · opportunity research · basic market analysis · research organization · findings summaries', background: 'Orange Digital Center — Market Research for Entrepreneur' },
	{ number: '02', category: 'Business & Research', categoryNumber: '01', categoryIntro: 'Helping early-stage ideas become clearer, better researched, and more structured.', title: 'Business Idea & Startup Development', description: 'Support for individuals and early-stage entrepreneurs who have a business idea and need help turning it into a clearer, more structured concept.', ideal: 'People shaping an early venture or product idea', support: 'Problem definition · target-user thinking · value proposition · opportunity analysis · business-model exploration · next-step planning', background: 'University of Maryland entrepreneurship learning · PSN · WASSCElab · Orange Digital Center entrepreneurship training' },
	{ number: '03', category: 'Business & Research', categoryNumber: '01', categoryIntro: 'Helping early-stage ideas become clearer, better researched, and more structured.', title: 'Project Planning & Coordination Support', description: 'Support for individuals and small teams who need help turning an idea into a more organized project with clearer objectives, tasks, timelines, documentation, and deliverables.', ideal: 'Individuals and small teams organizing a project', support: 'Project objectives · task breakdown · basic timelines · deliverables · project documentation · planning structure · coordination support', background: 'Google Foundations of Project Management · WASSCElab collaborative experience · Leadership experience' },
	{ number: '04', category: 'Digital & Professional Presence', categoryNumber: '02', categoryIntro: 'Helping individuals and organizations present their ideas, work, and identity professionally.', title: 'Digital Content & Personal Branding', description: 'Support for individuals, entrepreneurs, creators, and small organizations that want to communicate their ideas more professionally online.', ideal: 'Creators, founders, and small organizations building an online presence', support: 'Content planning · LinkedIn content · professional profile presentation · digital communication · personal-brand messaging · educational content · basic visual-content direction', background: 'Media MasterClass for Entrepreneur · Digital creation · LinkedIn professional development · Personal branding work' },
	{ number: '05', category: 'Digital & Professional Presence', categoryNumber: '02', categoryIntro: 'Helping individuals and organizations present their ideas, work, and identity professionally.', title: 'Professional Portfolio Development', description: "Professional portfolio development for students, aspiring entrepreneurs, creators, and early-career professionals who need a structured way to present their work, skills, education, achievements, certifications, projects, and professional journey.", ideal: 'Students, creators, and early-career professionals', support: 'Portfolio structure · professional profile writing · project presentation · skills organization · achievement presentation · certificate and evidence organization · Word/PDF portfolio development · online portfolio planning', background: "Practical experience developing Jerry's own professional portfolio" },
	{ number: '06', category: 'Digital & Professional Presence', categoryNumber: '02', categoryIntro: 'Helping individuals and organizations present their ideas, work, and identity professionally.', title: 'CV & Resume Development', description: 'Helping individuals organize, write, refine, and professionally present their CV or resume so that their experience, education, skills, achievements, and qualifications are communicated clearly.', ideal: 'Individuals preparing a clear professional profile', support: 'CV structure · resume structure · professional wording · achievement presentation · experience organization · skills presentation · formatting · ATS-conscious structure where appropriate', background: 'Professional document development experience' },
	{ number: '07', category: 'Digital & Professional Presence', categoryNumber: '02', categoryIntro: 'Helping individuals and organizations present their ideas, work, and identity professionally.', title: 'Personal & Professional Website Development', description: 'Designing and developing responsive websites for individuals, entrepreneurs, creators, professionals, portfolios, and simple business purposes.', ideal: 'Individuals, creators, professionals, and simple businesses', support: 'Website structure · frontend development · responsive design · content organization · professional presentation · contact integration · project presentation · basic deployment guidance', background: "Jerry's current website-development project" },
	{ number: '08', category: 'AI & Digital Support', categoryNumber: '03', categoryIntro: 'Using AI tools thoughtfully to support research, content, organization, and selected workflows.', title: 'AI-Assisted Business & Content Support', description: 'Practical support using AI tools for selected research, brainstorming, content development, information organization, idea development, and business workflows.', ideal: 'People exploring practical AI-assisted workflows', support: 'AI-assisted research · brainstorming · content structuring · information organization · idea development · selected workflow support · AI-tool exploration', background: 'IBM AI Foundations for Business · Introduction to Artificial Intelligence · Generative AI: Introduction and Applications' }
];

const credentialCard = (credential, featured = false) => `<article class="credential-card${featured ? ' featured-card' : ''}"><div class="credential-card-top"><span class="credential-issuer">${credential.issuer}</span><span class="credential-mark">${featured ? '01' : '↗'}</span></div><h3>${credential.title}</h3><p>${credential.description}</p><div class="credential-foot"><span class="credential-date">${credential.type}<br>${credential.date}</span><button class="credential-button" type="button" data-credential="${credentials.indexOf(credential)}">View details</button></div></article>`;

const featuredContainer = document.querySelector('[data-featured]');
const gridContainer = document.querySelector('[data-credential-grid]');
const emptyState = document.querySelector('[data-credential-empty]');
const dialog = document.querySelector('[data-credential-dialog]');
const dialogClose = document.querySelector('[data-dialog-close]');
let previousFocus;

const renderCredentials = (filter = 'all') => {
	const filtered = credentials.filter((credential) => filter === 'all' || credential.category === filter);
	featuredContainer.innerHTML = filter === 'all' ? credentials.filter((credential) => credential.featured).map((credential) => credentialCard(credential, true)).join('') : '';
	gridContainer.innerHTML = filtered.filter((credential) => filter !== 'all' || !credential.featured).map((credential) => credentialCard(credential)).join('');
	emptyState.hidden = filtered.length > 0;
};

const serviceList = document.querySelector('[data-services]');
const serviceDialog = document.querySelector('[data-service-dialog]');
const serviceForm = document.querySelector('[data-service-form]');
const serviceSelect = document.querySelector('[data-service-select]');
const serviceSuccess = document.querySelector('[data-service-success]');
let previousServiceFocus;

const serviceCategories = [...new Map(services.map((service) => [service.category, service])).values()];
serviceList.innerHTML = serviceCategories.map((category) => `<section class="service-category reveal"><header class="service-category-header"><span class="service-category-number">${category.categoryNumber}</span><div><p class="eyebrow">${category.category}</p><p>${category.categoryIntro}</p></div></header><div class="service-category-list">${services.filter((service) => service.category === category.category).map((service) => `<article class="service-row"><span class="service-number">${service.number}</span><div class="service-main"><p class="service-positioning">${service.category === 'AI & Digital Support' ? 'Practical AI support' : service.title}</p><h3>${service.title}</h3><p>${service.description}</p><div class="service-details"><div><span>Ideal for</span><strong>${service.ideal}</strong></div><div><span>Support areas</span><strong>${service.support}</strong></div><div><span>Related background</span><strong>${service.background}</strong></div></div></div><button class="service-request" type="button" data-request-service="${service.title}">Request This Service <span aria-hidden="true">↗</span></button></article>`).join('')}</div></section>`).join('') + `<div class="services-closing reveal"><p class="eyebrow">Need something more specific?</p><h3>Let's discuss your project.</h3><button class="button button-primary" type="button" data-request-service="">Request a Service <span aria-hidden="true">↗</span></button></div>`;
serviceSelect.innerHTML += services.map((service) => `<option>${service.title}</option>`).join('');

const openServiceRequest = (serviceName) => {
	previousServiceFocus = document.activeElement;
	serviceForm.reset();
	serviceSuccess.hidden = true;
	serviceForm.hidden = false;
	serviceSelect.value = serviceName || '';
	document.body.classList.add('dialog-open');
	serviceDialog.showModal();
	serviceDialog.querySelector('input').focus();
};

const closeServiceRequest = () => {
	if (!serviceDialog.open) return;
	serviceDialog.close();
	if (previousServiceFocus) previousServiceFocus.focus();
};

serviceList.addEventListener('click', (event) => {
	const button = event.target.closest('[data-request-service]');
	if (button) openServiceRequest(button.dataset.requestService);
});
serviceDialog.querySelector('[data-service-close]').addEventListener('click', closeServiceRequest);
serviceDialog.addEventListener('click', (event) => { if (event.target === serviceDialog) closeServiceRequest(); });
serviceDialog.addEventListener('cancel', (event) => { event.preventDefault(); closeServiceRequest(); });
serviceDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
serviceForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const data = new FormData(serviceForm);
	const subject = `Service Request — ${data.get('service')}`;
	const body = [`Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Selected service: ${data.get('service')}`, `Project description: ${data.get('project')}`, `Requested support: ${data.get('support')}`, `Timeline: ${data.get('timeline')}`, `Preferred contact method: ${data.get('contact')}`, `Additional information: ${data.get('additional') || 'None supplied'}`].join('\n\n');
	window.location.href = `mailto:senapojerrykeahii@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	serviceForm.hidden = true;
	serviceSuccess.hidden = false;
});
serviceDialog.querySelector('[data-return-services]').addEventListener('click', closeServiceRequest);

const openCredential = (credential) => {
	previousFocus = document.activeElement;
	document.body.classList.add('dialog-open');
	dialog.querySelector('[data-dialog-kicker]').textContent = `${credential.categoryLabel} / ${credential.type}`;
	dialog.querySelector('[data-dialog-title]').textContent = credential.title;
	dialog.querySelector('[data-dialog-issuer]').textContent = credential.issuer;
	dialog.querySelector('[data-dialog-type]').textContent = credential.provider;
	dialog.querySelector('[data-dialog-date]').textContent = credential.date;
	dialog.querySelector('[data-dialog-description]').textContent = credential.description;
	dialog.querySelector('[data-dialog-preview]').innerHTML = credential.documentPath ? `<iframe title="Preview of ${credential.title}" loading="lazy" src="${encodeURI(credential.documentPath)}"></iframe>` : 'No public certificate file supplied for this record';
	dialog.querySelector('[data-dialog-actions]').innerHTML = `${credential.documentPath ? `<a href="${encodeURI(credential.documentPath)}" target="_blank" rel="noopener noreferrer">View Certificate ↗</a>` : ''}${credential.verificationUrl ? `<a href="${credential.verificationUrl}" target="_blank" rel="noopener noreferrer">Verify Credential ↗</a>` : ''}${credential.credentialId ? `<span class="credential-date">ID ${credential.credentialId}</span>` : ''}`;
	dialog.showModal();
	dialogClose.focus();
};

const closeCredential = () => {
	if (!dialog.open) return;
	dialog.close();
	if (previousFocus) previousFocus.focus();
};

featuredContainer.addEventListener('click', (event) => {
	const button = event.target.closest('[data-credential]');
	if (button) openCredential(credentials[button.dataset.credential]);
});
gridContainer.addEventListener('click', (event) => {
	const button = event.target.closest('[data-credential]');
	if (button) openCredential(credentials[button.dataset.credential]);
});
document.querySelectorAll('[data-filter]').forEach((button) => {
	button.addEventListener('click', () => {
		document.querySelectorAll('[data-filter]').forEach((item) => { item.classList.toggle('is-active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
		renderCredentials(button.dataset.filter);
	});
});
dialogClose.addEventListener('click', closeCredential);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeCredential(); });
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); });
dialog.addEventListener('cancel', (event) => { event.preventDefault(); closeCredential(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && dialog.open) { event.preventDefault(); closeCredential(); } });
renderCredentials();

const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('error', () => {
	profileImage.remove();
	const placeholder = document.querySelector('.portrait-placeholder');
	placeholder.querySelector('.portrait-initials').style.display = 'block';
	placeholder.querySelector('.portrait-note').style.display = 'block';
});

document.querySelector('.driving-video')?.remove();

const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelector('[data-year]').textContent = new Date().getFullYear();
