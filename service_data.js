const serviceData = {
    // Cleaning Services
    'window-cleaning': {
        id: 'window-cleaning',
        title: 'High Rise and Low-Rise Window Cleaning Services',
        category: 'Cleaning Services',
        shortTitle: 'Window Cleaning',
        description: 'Expert window cleaning services for buildings of all heights with safety focus',
        heroImage: 'images/services/Cleaning Services/High Rise and Low-Rise Window Cleaning Services/27.png',
        fullDescription: 'At HBM, we specialize in expert window cleaning services for both high rise and low-rise buildings. Whether you\'re managing a residential, commercial, or mixed-use property, we provide comprehensive solutions to keep your windows looking pristine and clear.',
        services: [
            {
                title: 'High Rise Window Cleaning',
                description: 'Our certified technicians use rope access or aerial lifts to clean windows at great heights, ensuring safety and efficiency without compromising quality.'
            },
            {
                title: 'Low Rise Window Cleaning',
                description: 'We clean windows of buildings with lower elevations using traditional methods or water-fed poles for a thorough, streak-free finish.'
            }
        ],
        benefits: [
            {
                title: 'Expert Technicians',
                description: 'Our team is trained in safe working practices for windows at all heights, ensuring the job is done safely and efficiently.'
            },
            {
                title: 'Streak-Free Finish',
                description: 'We use advanced cleaning solutions and techniques to ensure your windows are spotless, without streaks or residue.'
            },
            {
                title: 'Safety First',
                description: 'Safety is a top priority in all of our cleaning projects, and we follow strict protocols to ensure a secure environment.'
            }
        ],
        ctaTitle: 'Ready to make your windows sparkle?',
        ctaDescription: 'Contact HBM today to schedule high rise or low-rise window cleaning services and let our professionals enhance the appearance of your property.',
        relatedServices: ['window-installation', 'glass-scratch-repair', 'caulking-glazing']
    },

    'post-construction-cleaning': {
        id: 'post-construction-cleaning',
        title: 'Post-Construction Cleaning Services',
        category: 'Cleaning Services',
        shortTitle: 'Post-Construction',
        description: 'Comprehensive post-construction cleanup services for residential and commercial properties',
        heroImage: 'images/services/Cleaning Services/Post-Construction Cleaning Services/11.png',
        fullDescription: 'HBM provides thorough post-construction cleaning services to prepare your newly constructed or renovated space for occupancy. Our experienced team handles all aspects of construction debris removal and detailed cleaning.',
        services: [
            {
                title: 'Construction Debris Removal',
                description: 'Safe and efficient removal of all construction materials, debris, and waste from your property.'
            },
            {
                title: 'Detail Cleaning',
                description: 'Comprehensive cleaning of all surfaces including floors, walls, windows, and fixtures to move-in ready condition.'
            }
        ],
        benefits: [
            {
                title: 'Thorough Service',
                description: 'We ensure every corner is cleaned and all construction dust and debris is removed.'
            },
            {
                title: 'Safe Practices',
                description: 'Our team follows safety protocols when handling construction materials and cleaning chemicals.'
            },
            {
                title: 'Ready for Occupancy',
                description: 'We prepare your space to be immediately ready for occupancy or use.'
            }
        ],
        ctaTitle: 'Ready to move into your clean space?',
        ctaDescription: 'Contact HBM for professional post-construction cleaning services that will make your new space move-in ready.',
        relatedServices: ['window-cleaning', 'pressure-washing', 'roof-ceiling-cleaning']
    },

    'roof-ceiling-cleaning': {
        id: 'roof-ceiling-cleaning',
        title: 'Interior Roof and Ceiling Cleaning Services',
        category: 'Cleaning Services',
        shortTitle: 'Roof & Ceiling',
        description: 'Professional cleaning services for interior roofs and ceilings',
        heroImage: 'images/services/Cleaning Services/Interior Roof and Ceiling Cleaning Services/20.png',
        fullDescription: 'HBM offers specialized interior roof and ceiling cleaning services to maintain the cleanliness and appearance of overhead surfaces in commercial and residential properties.',
        services: [
            {
                title: 'Ceiling Cleaning',
                description: 'Thorough cleaning of suspended ceilings, drywall ceilings, and specialty ceiling materials.'
            },
            {
                title: 'Interior Roof Cleaning',
                description: 'Professional cleaning of exposed interior roof structures and beams.'
            }
        ],
        benefits: [
            {
                title: 'Specialized Equipment',
                description: 'We use appropriate tools and techniques to safely clean overhead surfaces.'
            },
            {
                title: 'Improved Air Quality',
                description: 'Regular cleaning helps maintain better indoor air quality by removing dust and debris.'
            },
            {
                title: 'Professional Results',
                description: 'Our experienced team delivers thorough, professional cleaning results.'
            }
        ],
        ctaTitle: 'Need professional ceiling cleaning?',
        ctaDescription: 'Contact HBM for expert interior roof and ceiling cleaning services that maintain your property\'s appearance.',
        relatedServices: ['post-construction-cleaning', 'window-cleaning', 'pressure-washing']
    },

    'solar-panel-cleaning': {
        id: 'solar-panel-cleaning',
        title: 'Solar Panel Cleaning Services',
        category: 'Cleaning Services',
        shortTitle: 'Solar Panel',
        description: 'Professional solar panel cleaning to maximize energy efficiency',
        heroImage: 'images/services/Cleaning Services/Solar Panel Cleaning Services/13.png',
        fullDescription: 'HBM provides specialized solar panel cleaning services to ensure your solar energy system operates at peak efficiency. Regular cleaning removes dirt, debris, and buildup that can reduce energy output.',
        services: [
            {
                title: 'Panel Cleaning',
                description: 'Careful cleaning of solar panels using appropriate techniques and solutions to avoid damage.'
            },
            {
                title: 'System Inspection',
                description: 'Visual inspection of panels and mounting systems during cleaning service.'
            }
        ],
        benefits: [
            {
                title: 'Maximize Efficiency',
                description: 'Clean panels produce more energy, maximizing your return on investment.'
            },
            {
                title: 'Safe Methods',
                description: 'We use safe cleaning methods that won\'t damage delicate solar panel surfaces.'
            },
            {
                title: 'Regular Maintenance',
                description: 'Scheduled cleaning helps maintain optimal performance year-round.'
            }
        ],
        ctaTitle: 'Maximize your solar efficiency?',
        ctaDescription: 'Contact HBM for professional solar panel cleaning services that keep your system running at peak performance.',
        relatedServices: ['window-cleaning', 'roof-ceiling-cleaning', 'pressure-washing']
    },

    'pressure-washing': {
        id: 'pressure-washing',
        title: 'Pressure Power Washing Services',
        category: 'Cleaning Services',
        shortTitle: 'Pressure Washing',
        description: 'High-pressure cleaning for exterior surfaces and hard-to-clean areas',
        heroImage: 'images/services/Cleaning Services/Pressure Power Washing Services/2.png',
        fullDescription: 'HBM offers professional pressure washing services to clean exterior surfaces, remove stubborn stains, and restore the appearance of various building surfaces.',
        services: [
            {
                title: 'Exterior Surface Cleaning',
                description: 'High-pressure cleaning of building exteriors, sidewalks, parking areas, and other hard surfaces.'
            },
            {
                title: 'Stain Removal',
                description: 'Effective removal of oil stains, graffiti, and other stubborn marks from surfaces.'
            }
        ],
        benefits: [
            {
                title: 'Powerful Cleaning',
                description: 'High-pressure equipment effectively removes dirt, grime, and stains.'
            },
            {
                title: 'Surface Restoration',
                description: 'Restore surfaces to like-new appearance with professional pressure washing.'
            },
            {
                title: 'Versatile Applications',
                description: 'Suitable for various surfaces including concrete, brick, stone, and siding.'
            }
        ],
        ctaTitle: 'Need powerful exterior cleaning?',
        ctaDescription: 'Contact HBM for professional pressure washing services that restore your property\'s exterior appearance.',
        relatedServices: ['post-construction-cleaning', 'parking-line-striping', 'concrete-testing']
    },

    // Installation & Repair Services
    'window-installation': {
        id: 'window-installation',
        title: 'Window Installation Services',
        category: 'Installation & Repair',
        shortTitle: 'Window Installation',
        description: 'Professional window installation services for residential and commercial properties',
        heroImage: 'images/services/Installation & Repair/Window Installation Services/23.png',
        fullDescription: 'HBM provides expert window installation services for both residential and commercial properties. Our experienced technicians ensure proper installation for energy efficiency and long-lasting performance.',
        services: [
            {
                title: 'Residential Windows',
                description: 'Professional installation of residential windows including single-hung, double-hung, casement, and specialty windows.'
            },
            {
                title: 'Commercial Windows',
                description: 'Expert installation of commercial-grade windows for office buildings and commercial properties.'
            }
        ],
        benefits: [
            {
                title: 'Energy Efficiency',
                description: 'Proper installation ensures maximum energy efficiency and reduced heating/cooling costs.'
            },
            {
                title: 'Professional Installation',
                description: 'Our certified technicians ensure windows are installed correctly the first time.'
            },
            {
                title: 'Quality Materials',
                description: 'We work with high-quality window manufacturers to ensure lasting performance.'
            }
        ],
        ctaTitle: 'Ready for new windows?',
        ctaDescription: 'Contact HBM for professional window installation services that improve your property\'s efficiency and appearance.',
        relatedServices: ['window-cleaning', 'glass-scratch-repair', 'caulking-glazing']
    },

    'isa-button-installation': {
        id: 'isa-button-installation',
        title: 'ISA Button Installation and Anchor Testing Services',
        category: 'Installation & Repair',
        shortTitle: 'ISA Button Installation',
        description: 'Professional ISA button installation and anchor testing for building safety',
        heroImage: 'images/services/Installation & Repair/ISA Button Installation and Anchor Testing Services/10.png',
        fullDescription: 'HBM provides expert ISA button installation and anchor testing services to ensure building safety compliance and proper anchor point installation for rope access work.',
        services: [
            {
                title: 'ISA Button Installation',
                description: 'Professional installation of ISA buttons for rope access anchor points on building facades.'
            },
            {
                title: 'Anchor Testing',
                description: 'Comprehensive testing of anchor points to ensure they meet safety standards and load requirements.'
            }
        ],
        benefits: [
            {
                title: 'Safety Compliance',
                description: 'Ensure your building meets safety standards for rope access work and maintenance.'
            },
            {
                title: 'Certified Installation',
                description: 'Our technicians are certified in proper ISA button installation techniques.'
            },
            {
                title: 'Testing Documentation',
                description: 'Receive proper documentation of anchor testing for compliance records.'
            }
        ],
        ctaTitle: 'Need ISA button installation?',
        ctaDescription: 'Contact HBM for professional ISA button installation and anchor testing services that ensure building safety compliance.',
        relatedServices: ['rope-access-training', 'window-cleaning', 'bollard-installation']
    },

    'painting-drywall': {
        id: 'painting-drywall',
        title: 'Painting and Drywall Repair Services',
        category: 'Installation & Repair',
        shortTitle: 'Painting & Drywall',
        description: 'Professional painting and drywall repair for interior and exterior surfaces',
        heroImage: 'images/services/Installation & Repair/Painting and Drywall Repair Services/5.png',
        fullDescription: 'HBM offers comprehensive painting and drywall repair services to maintain and improve the appearance of your property\'s interior and exterior surfaces.',
        services: [
            {
                title: 'Interior Painting',
                description: 'Professional interior painting services for walls, ceilings, and trim work.'
            },
            {
                title: 'Drywall Repair',
                description: 'Expert repair of holes, cracks, and damage to drywall surfaces before painting.'
            }
        ],
        benefits: [
            {
                title: 'Quality Materials',
                description: 'We use high-quality paints and materials for lasting, professional results.'
            },
            {
                title: 'Skilled Craftsmen',
                description: 'Our experienced painters deliver smooth, even coverage and clean finish work.'
            },
            {
                title: 'Complete Service',
                description: 'From repair to final coat, we handle all aspects of your painting project.'
            }
        ],
        ctaTitle: 'Ready to refresh your space?',
        ctaDescription: 'Contact HBM for professional painting and drywall repair services that transform your property\'s appearance.',
        relatedServices: ['flooring', 'post-construction-cleaning', 'window-installation']
    },

    'flooring': {
        id: 'flooring',
        title: 'Flooring Installation and Repair Services',
        category: 'Installation & Repair',
        shortTitle: 'Flooring Services',
        description: 'Professional flooring installation and repair for all types of flooring materials',
        heroImage: 'images/services/Installation & Repair/Flooring Installation and Repair Services/30.png',
        fullDescription: 'HBM provides expert flooring installation and repair services for residential and commercial properties, working with various flooring materials to meet your needs.',
        services: [
            {
                title: 'Flooring Installation',
                description: 'Professional installation of hardwood, laminate, tile, and other flooring materials.'
            },
            {
                title: 'Floor Repair',
                description: 'Expert repair of damaged flooring including scratches, dents, and loose boards.'
            }
        ],
        benefits: [
            {
                title: 'Experienced Installers',
                description: 'Our skilled technicians have experience with all major flooring types.'
            },
            {
                title: 'Quality Workmanship',
                description: 'We ensure proper installation for long-lasting, beautiful floors.'
            },
            {
                title: 'Material Expertise',
                description: 'We work with quality flooring materials from trusted manufacturers.'
            }
        ],
        ctaTitle: 'Ready for new floors?',
        ctaDescription: 'Contact HBM for professional flooring installation and repair services that enhance your property\'s value.',
        relatedServices: ['painting-drywall', 'post-construction-cleaning', 'window-installation']
    },

    'bollard-installation': {
        id: 'bollard-installation',
        title: 'Bollard Installation Services',
        category: 'Installation & Repair',
        shortTitle: 'Bollard Installation',
        description: 'Professional bollard installation for property protection and traffic control',
        heroImage: 'images/services/Installation & Repair/Bollard Installation Services/21.png',
        fullDescription: 'HBM provides professional bollard installation services to protect property, control traffic flow, and enhance security for commercial and residential properties.',
        services: [
            {
                title: 'Security Bollards',
                description: 'Installation of security bollards to protect buildings and pedestrian areas from vehicle access.'
            },
            {
                title: 'Traffic Control Bollards',
                description: 'Installation of bollards for traffic management and parking area delineation.'
            }
        ],
        benefits: [
            {
                title: 'Enhanced Security',
                description: 'Bollards provide effective protection against vehicle intrusion.'
            },
            {
                title: 'Durable Installation',
                description: 'Proper installation ensures bollards withstand impact and weather conditions.'
            },
            {
                title: 'Custom Solutions',
                description: 'We provide bollard solutions tailored to your specific security and traffic needs.'
            }
        ],
        ctaTitle: 'Need property protection?',
        ctaDescription: 'Contact HBM for professional bollard installation services that enhance your property\'s security and safety.',
        relatedServices: ['concrete-testing', 'parking-line-striping', 'isa-button-installation']
    },

    'brickwork-repair': {
        id: 'brickwork-repair',
        title: 'Brickwork Repair Services',
        category: 'Installation & Repair',
        shortTitle: 'Brickwork Repair',
        description: 'Expert brickwork repair and restoration for building exteriors',
        heroImage: 'images/services/Installation & Repair/Brickwork Repair Services/24.png',
        fullDescription: 'HBM offers professional brickwork repair and restoration services to maintain the structural integrity and appearance of brick buildings and facades.',
        services: [
            {
                title: 'Brick Repair',
                description: 'Expert repair of damaged, cracked, or deteriorated bricks in building facades.'
            },
            {
                title: 'Mortar Restoration',
                description: 'Professional repointing and mortar restoration to maintain structural integrity.'
            }
        ],
        benefits: [
            {
                title: 'Structural Integrity',
                description: 'Proper brick repair maintains the structural integrity of your building.'
            },
            {
                title: 'Weather Protection',
                description: 'Quality repairs protect your building from water damage and weathering.'
            },
            {
                title: 'Aesthetic Restoration',
                description: 'Professional repair restores the original appearance of your brick facade.'
            }
        ],
        ctaTitle: 'Need brick repair services?',
        ctaDescription: 'Contact HBM for professional brickwork repair services that restore your building\'s integrity and appearance.',
        relatedServices: ['caulking-glazing', 'pressure-washing', 'concrete-testing']
    },

    // Glass Services
    'glass-scratch-repair': {
        id: 'glass-scratch-repair',
        title: 'Glass Scratch Repair Service',
        category: 'Glass Services',
        shortTitle: 'Glass Repair',
        description: 'Professional glass scratch repair to restore clarity and appearance',
        heroImage: 'images/services/Glass Services/Glass Scratch Repair Service/18.png',
        fullDescription: 'HBM specializes in professional glass scratch repair services to restore scratched glass to its original clarity and appearance without the need for costly replacement.',
        services: [
            {
                title: 'Scratch Removal',
                description: 'Professional removal of scratches from glass surfaces using specialized techniques and equipment.'
            },
            {
                title: 'Glass Restoration',
                description: 'Complete restoration of glass clarity and optical quality after scratch repair.'
            }
        ],
        benefits: [
            {
                title: 'Cost-Effective',
                description: 'Repair costs significantly less than glass replacement while achieving excellent results.'
            },
            {
                title: 'Restored Clarity',
                description: 'Professional repair restores glass to near-original clarity and appearance.'
            },
            {
                title: 'Quick Service',
                description: 'Most glass scratch repairs can be completed quickly with minimal disruption.'
            }
        ],
        ctaTitle: 'Need glass scratch repair?',
        ctaDescription: 'Contact HBM for professional glass scratch repair services that restore your windows to crystal clarity.',
        relatedServices: ['window-cleaning', 'window-installation', 'caulking-glazing']
    },

    'caulking-glazing': {
        id: 'caulking-glazing',
        title: 'Caulking and Glazing Services',
        category: 'Glass Services',
        shortTitle: 'Caulking & Glazing',
        description: 'Professional sealing and glazing services for windows and building joints',
        heroImage: 'images/services/Glass Services/Caulking and Glazing Services/11.png',
        fullDescription: 'HBM provides expert caulking and glazing services to seal windows, joints, and other building openings, preventing water infiltration and improving energy efficiency.',
        services: [
            {
                title: 'Window Caulking',
                description: 'Professional caulking of window frames and joints to prevent water and air leaks.'
            },
            {
                title: 'Glazing Services',
                description: 'Expert glazing installation and repair for window systems and glass installations.'
            }
        ],
        benefits: [
            {
                title: 'Water Protection',
                description: 'Proper sealing prevents water infiltration and related building damage.'
            },
            {
                title: 'Energy Efficiency',
                description: 'Quality caulking and glazing improve building energy efficiency.'
            },
            {
                title: 'Long-Lasting Seals',
                description: 'We use high-quality materials for durable, long-lasting seals.'
            }
        ],
        ctaTitle: 'Need professional sealing services?',
        ctaDescription: 'Contact HBM for expert caulking and glazing services that protect your building and improve efficiency.',
        relatedServices: ['window-installation', 'glass-scratch-repair', 'brickwork-repair']
    },

    // Exterior & Groundwork
    'interlocking': {
        id: 'interlocking',
        title: 'Interlocking Services',
        category: 'Exterior & Groundwork',
        shortTitle: 'Interlocking',
        description: 'Professional interlocking stone installation and repair for driveways and walkways',
        heroImage: 'images/services/Exterior & Groundwork/Interlocking Services/38.png',
        fullDescription: 'HBM offers professional interlocking stone services for driveways, walkways, and outdoor spaces, providing durable and attractive hardscaping solutions.',
        services: [
            {
                title: 'Interlocking Installation',
                description: 'Professional installation of interlocking stones for driveways, walkways, and outdoor areas.'
            },
            {
                title: 'Repair and Maintenance',
                description: 'Expert repair of damaged interlocking areas and regular maintenance services.'
            }
        ],
        benefits: [
            {
                title: 'Durable Surface',
                description: 'Interlocking stones provide a durable, long-lasting surface for high-traffic areas.'
            },
            {
                title: 'Attractive Appearance',
                description: 'Professional installation creates beautiful, well-designed outdoor spaces.'
            },
            {
                title: 'Low Maintenance',
                description: 'Properly installed interlocking requires minimal ongoing maintenance.'
            }
        ],
        ctaTitle: 'Ready for beautiful interlocking?',
        ctaDescription: 'Contact HBM for professional interlocking services that enhance your property\'s curb appeal and functionality.',
        relatedServices: ['parking-line-striping', 'concrete-testing', 'pressure-washing']
    },

    'parking-line-striping': {
        id: 'parking-line-striping',
        title: 'Parking Line Striping Services',
        category: 'Exterior & Groundwork',
        shortTitle: 'Parking Striping',
        description: 'Professional parking lot line striping and marking services',
        heroImage: 'images/services/Exterior & Groundwork/Parking Line Striping Services/27.png',
        fullDescription: 'HBM provides professional parking lot line striping and marking services to maintain clear, visible parking areas and ensure compliance with accessibility requirements.',
        services: [
            {
                title: 'Line Striping',
                description: 'Professional painting of parking lot lines, spaces, and directional markings.'
            },
            {
                title: 'Accessibility Markings',
                description: 'Proper marking of handicapped spaces and accessibility features as required by law.'
            }
        ],
        benefits: [
            {
                title: 'Clear Organization',
                description: 'Proper striping maximizes parking capacity and improves traffic flow.'
            },
            {
                title: 'Compliance',
                description: 'Ensure your parking lot meets accessibility and safety requirements.'
            },
            {
                title: 'Professional Appearance',
                description: 'Fresh striping enhances your property\'s professional appearance.'
            }
        ],
        ctaTitle: 'Need parking lot striping?',
        ctaDescription: 'Contact HBM for professional parking line striping services that improve organization and compliance.',
        relatedServices: ['pressure-washing', 'interlocking', 'bollard-installation']
    },

    'hoisting': {
        id: 'hoisting',
        title: 'Hoisting Services',
        category: 'Exterior & Groundwork',
        shortTitle: 'Hoisting',
        description: 'Professional hoisting services for material transport and heavy lifting',
        heroImage: 'images/services/Exterior & Groundwork/Hoisting Services/20.png',
        fullDescription: 'HBM provides professional hoisting services for transporting materials and equipment to elevated areas safely and efficiently during construction and maintenance projects.',
        services: [
            {
                title: 'Material Hoisting',
                description: 'Safe transport of materials and equipment to elevated work areas using professional hoisting equipment.'
            },
            {
                title: 'Heavy Lifting',
                description: 'Professional heavy lifting services for construction and maintenance projects.'
            }
        ],
        benefits: [
            {
                title: 'Safety First',
                description: 'Professional hoisting eliminates the safety risks of manual material transport.'
            },
            {
                title: 'Efficient Transport',
                description: 'Hoisting services speed up project completion by efficiently moving materials.'
            },
            {
                title: 'Equipment Expertise',
                description: 'Our operators are trained in safe hoisting equipment operation.'
            }
        ],
        ctaTitle: 'Need hoisting services?',
        ctaDescription: 'Contact HBM for professional hoisting services that safely transport materials for your project.',
        relatedServices: ['concrete-testing', 'isa-button-installation', 'bollard-installation']
    },

    'concrete-testing': {
        id: 'concrete-testing',
        title: 'Concrete Testing Service',
        category: 'Exterior & Groundwork',
        shortTitle: 'Concrete Testing',
        description: 'Professional concrete testing and quality assurance services',
        heroImage: 'images/services/Exterior & Groundwork/Concrete Testing Service/36.png',
        fullDescription: 'HBM offers professional concrete testing services to ensure concrete quality, strength, and compliance with building codes and specifications.',
        services: [
            {
                title: 'Strength Testing',
                description: 'Professional testing of concrete strength and quality to ensure compliance with specifications.'
            },
            {
                title: 'Quality Assurance',
                description: 'Comprehensive quality assurance testing throughout the concrete placement process.'
            }
        ],
        benefits: [
            {
                title: 'Code Compliance',
                description: 'Ensure your concrete meets building codes and project specifications.'
            },
            {
                title: 'Quality Assurance',
                description: 'Professional testing provides confidence in concrete quality and performance.'
            },
            {
                title: 'Documentation',
                description: 'Receive proper documentation of testing results for project records.'
            }
        ],
        ctaTitle: 'Need concrete testing?',
        ctaDescription: 'Contact HBM for professional concrete testing services that ensure quality and compliance.',
        relatedServices: ['hoisting', 'bollard-installation', 'interlocking']
    },

    // Training
    'rope-access-training': {
        id: 'rope-access-training',
        title: 'Rope Access Training Services',
        category: 'Training',
        shortTitle: 'Rope Access Training',
        description: 'Professional rope access training and certification programs',
        heroImage: 'images/services/Training/Rope Access Training Services/16.png',
        fullDescription: 'HBM provides comprehensive rope access training programs to certify technicians in safe rope access techniques for building maintenance and inspection work.',
        services: [
            {
                title: 'Level 1 Training',
                description: 'Basic rope access training covering fundamental techniques and safety procedures.'
            },
            {
                title: 'Advanced Certification',
                description: 'Advanced rope access training for experienced technicians seeking higher certification levels.'
            }
        ],
        benefits: [
            {
                title: 'Industry Certification',
                description: 'Receive recognized rope access certification for professional advancement.'
            },
            {
                title: 'Safety Focus',
                description: 'Training emphasizes safety protocols and best practices for rope access work.'
            },
            {
                title: 'Experienced Instructors',
                description: 'Learn from certified instructors with extensive rope access experience.'
            }
        ],
        ctaTitle: 'Ready for rope access training?',
        ctaDescription: 'Contact HBM for professional rope access training that advances your career and ensures safety.',
        relatedServices: ['isa-button-installation', 'window-cleaning', 'hoisting']
    }
};

// Service categories for navigation
const serviceCategories = {
    'Installation & Repair': [
        'window-installation',
        'isa-button-installation', 
        'painting-drywall',
        'flooring',
        'bollard-installation',
        'brickwork-repair'
    ],
    'Cleaning Services': [
        'window-cleaning',
        'post-construction-cleaning',
        'roof-ceiling-cleaning',
        'solar-panel-cleaning', 
        'pressure-washing'
    ],
    'Glass Services': [
        'glass-scratch-repair',
        'caulking-glazing'
    ],
    'Exterior & Groundwork': [
        'interlocking',
        'parking-line-striping',
        'hoisting',
        'concrete-testing'
    ],
    'Training': [
        'rope-access-training'
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { serviceData, serviceCategories };
}