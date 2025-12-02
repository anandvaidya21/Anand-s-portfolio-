// Data
const projects = [
    {
        title: 'GFG Official Website',
        description: 'Developed the official GeeksforGeeks campus body website with modern UI/UX.',
        image: 'https://images.unsplash.com/photo-1652939617330-e5b59457c496?w=800&q=80',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        url: 'https://geekforgeeks-bgiem-student-chapter.vercel.app/'
    },
    {
        title: 'No Trace', 
        description: 'A secure data wiping tool in single click in[android, windows & linux], Anand currently working on it',
        image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80',
        tags: ['Python', 'React', 'FastAPI', 'PostgreSQL'],
        url: 'https://no-trace-tool.vercel.app/'
    },
    {
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce{medical& ayurveda} solution with product management and payments.',
        image: 'https://images.unsplash.com/photo-1627599936744-51d288f89af4?w=800&q=80',
        tags: ['MERN Stack', 'MongoDB', 'AWS'],
        url: ''
    },
    {
        title: 'Gen AI Application',
        description: 'Generative AI application leveraging large language models for content generation.',
        image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=800&q=80',
        tags: ['Python', 'OpenAI', 'LangChain'],
        url: 'this project is not live now, will be available soon!!',
        alert: ''

    },
    {
        title: 'Churn Prediction',
        description: 'Machine learning model to predict customer churn using advanced algorithms.',
        image: 'https://images.unsplash.com/photo-1717501217912-933d2792d493?w=800&q=80',
        tags: ['Python', 'Scikit-learn', 'XGBoost'],
        url: 'https://github.com/anandvaidya21'
    },
    {
        title: 'EDA Projects',
        description: 'Comprehensive exploratory data analysis projects on various datasets.',
        image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80',
        tags: ['Python', 'Matplotlib', 'Seaborn'],
        url: 'https://github.com/anandvaidya21/Data-analyst-projects'
    }
];

const skills = [
    {
        category: 'AI/ML & Data Science',
        items: [
            { name: 'Machine Learning', pct: 90 },
            { name: 'Data Analytics', pct: 95 },
            { name: 'NLP', pct: 85 },
            { name: 'Gen AI', pct: 70 },
            { name: 'ETL Pipeline', pct: 80 }
        ]
    },
    {
        category: 'Programming & Backend',
        items: [
            { name: 'Python', pct: 90 },
            { name: 'FastAPI', pct: 90 },
            { name: 'Node.js', pct: 75 },
            { name: 'Kotlin', pct: 65 },
            { name: 'blockchain', pct: 60 }
        ]
    },
    {
        category: 'Frontend Development',
        items: [
            { name: 'React', pct: 70 },
            { name: 'HTML/CSS', pct: 80 },
            { name: 'Tailwind CSS', pct: 80 },
            { name: 'JavaScript', pct: 75 }
        ]
    },
    {
        category: 'Database',
        items: [
            { name: 'MySQL', pct: 95 },
            { name: 'MongoDB', pct: 70 },
            { name: 'PostgreSQL', pct: 75 },
            { name: 'Oracle ', pct: 50 },
            
        ]
    },
    {
        category: 'Tools',
        items: [
            { name: 'Git', pct: 80 },
            { name: 'AWS', pct: 70 },
            { name: 'PowerBi', pct: 85 },
            { name: 'Kaggle ', pct: 90 },
            { name: 'HuggingFace ', pct: 70 },
            { name: 'Langchain ', pct: 70 },

            
        ]
    },

    {
        category: 'Extra Curri-cular Activity',
        items: [
            { name: 'Content Creation', pct: 95 },
            { name: 'Video Editing', pct: 95 },
            { name: 'Graphic Desiging', pct: 85 },
            { name: 'Social Media Marketing ', pct: 80 },
            { name: 'Athlete', pct: 80 }
            
        ]
    },
    
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();

    // Render Projects
    const projectsContainer = document.getElementById('projects-grid');
    projectsContainer.innerHTML = projects.map(p => `
        <div class="card fade-in">
            <div class="project-img">
                <img src="${p.image}" alt="${p.title}">
                <div class="project-overlay">
                    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-preview">
                        <i data-lucide="external-link"></i> Preview
                    </a>
                </div>
            </div>
            <h3>${p.title}</h3>
            <p style="color: #94a3b8; margin: 0.5rem 0;">${p.description}</p>
            <div class="tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="view-project-link">View Project</a>
        </div>
    `).join('');
    
    // Re-initialize icons for the new elements
    lucide.createIcons();

    // Render Skills
    const skillsContainer = document.getElementById('skills-grid');
    skillsContainer.innerHTML = skills.map(cat => `
        <div class="card fade-in">
            <h3 style="margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 0.5rem;">
                <span style="width: 4px; height: 20px; background: #3b82f6; border-radius: 2px;"></span>
                ${cat.category}
            </h3>
            <div>
                ${cat.items.map(item => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span>${item.name}</span>
                            <span style="color: #94a3b8">${item.pct}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${item.pct}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
        
        // Close menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuBtn.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }

    // Chatbot Logic
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message');
    const messagesContainer = document.getElementById('chat-messages');

    function toggleChat() {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
        }
        // Re-initialize icons if needed (sometimes dynamic content needs it)
        lucide.createIcons();
    }

    chatToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function addTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.classList.add('typing-indicator');
        indicator.id = 'typing-indicator';
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messagesContainer.appendChild(indicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    function getBotResponse(input) {
        input = input.toLowerCase();
        
        if (input.includes('hello','hii','hi') || input.includes('hi') || input.includes('hey')) {
            return "Hello! How can I help you today? Feel free to ask about my projects, skills, or how to contact me.";
        }
        if (input.includes('who are you') || input.includes('about')) {
            return "I'm an AI assistant for Anand. Anand is an AI/ML student, Data Analyst, and Full-Stack Developer passionate about building intelligent systems.";
        }
        if (input.includes('skill','tech') || input.includes('stack') || input.includes('what is his skills')|| input.includes('tech')) {
            return "Anand is proficient in Python, Machine Learning, Data Analytics, React, Node.js, and modern web technologies. He also does video editing and content creation!";
        }
        if (input.includes('project') || input.includes('work')) {
            return "Anand has worked on exciting projects like the GFG Official Website, No Trace (data wiping tool), and various AI/ML implementations. Check out the 'Projects' section for more!";
        }
        if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
            return "You can reach Anand at anandvaidya46@gmail.com or connect via LinkedIn and Twitter links in the contact section or you can text him on his Insta @anand_vaidya_ is response feel late !!";
        }
        if (input.includes('internship') || input.includes('experience')) {
            return "Anand has interned at Starial as a Web Developer  and also worked as intern at US based company & has been a finalist in multiple international or national hackathons.";
        }
        if (input.includes('instagram') || input.includes('insta')) {
            return "Anand's personal instagram acc is @anand_vaidya_ & cinematic creation in @anandfilms._ !! You can connect him with his insta too.";
        }
        return "I'm not sure about that, but I'm still learning! You can explore the portfolio to find more details or use the contact form to get in touch directly.";
    }

    function handleUserMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Add user message
        addMessage(text, 'user');
        chatInput.value = '';

        // Simulate bot thinking
        addTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            const response = getBotResponse(text);
            addMessage(response, 'bot');
        }, 1000);
    }

    sendButton.addEventListener('click', handleUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
