const serviceData = {
    // Cleaning Services
    'window-cleaning': {
        id: 'window-cleaning',
        title: 'High Rise and Low-Rise Window Cleaning Services',
        category: 'Cleaning Services',
        shortTitle: 'Window Cleaning',
        description: 'Expert window cleaning services for buildings of all heights with safety focus',
        heroVideo: 'images/services/Cleaning Services/High Rise and Low-Rise Window Cleaning Services/video.mp4',
        heroImage: 'images/services/Cleaning Services/High Rise and Low-Rise Window Cleaning Services/1.jpg',
        imageTop: 'images/services/Cleaning Services/High Rise and Low-Rise Window Cleaning Services/1.jpg',
        imageBottom: 'images/services/Cleaning Services/High Rise and Low-Rise Window Cleaning Services/2.jpg',
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
        heroVideo: 'images/services/Cleaning Services/Post-Construction Cleaning Services/video.mp4',
        heroImage: 'images/services/Cleaning Services/Post-Construction Cleaning Services/1.jpg',
        imageTop: 'images/services/Cleaning Services/Post-Construction Cleaning Services/1.jpg',
        imageBottom: 'images/services/Cleaning Services/Post-Construction Cleaning Services/2.jpg',
        fullDescription: 'At HBM, we provide comprehensive post-construction cleaning services designed to transform your newly built or renovated space into a pristine, move-in ready environment. Whether you\'re completing a residential renovation, commercial build-out, or large-scale construction project, we understand the unique challenges that come with post-construction cleanup and have the expertise to handle every detail with precision and care.',
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
        heroVideo: 'images/services/Cleaning Services/Interior Roof and Ceiling Cleaning Services/video.mp4',
        heroImage: 'images/services/Cleaning Services/Interior Roof and Ceiling Cleaning Services/1.jpg',
        imageTop: 'images/services/Cleaning Services/Interior Roof and Ceiling Cleaning Services/1.jpg',
        imageBottom: 'images/services/Cleaning Services/Interior Roof and Ceiling Cleaning Services/2.jpg',
        fullDescription: 'At HBM, we specialize in professional interior roof and ceiling cleaning services that address the unique challenges of maintaining overhead surfaces in both commercial and residential properties. Whether you\'re dealing with suspended ceiling systems, exposed beams, or specialty ceiling materials, our experienced team uses advanced techniques and specialized equipment to ensure thorough cleaning while maintaining the integrity of your ceiling structures.',
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
        heroVideo: 'images/services/Cleaning Services/Solar Panel Cleaning Services/video.mp4',
        heroImage: 'images/services/Cleaning Services/Solar Panel Cleaning Services/1.jpg',
        imageTop: 'images/services/Cleaning Services/Solar Panel Cleaning Services/1.jpg',
        imageBottom: 'images/services/Cleaning Services/Solar Panel Cleaning Services/2.jpg',
        fullDescription: 'At HBM, we understand that solar panels are a significant investment in your property\'s energy efficiency and environmental sustainability. Our specialized solar panel cleaning services are designed to maximize your system\'s performance and return on investment. Whether you have residential rooftop installations or large commercial solar arrays, we provide comprehensive cleaning solutions that remove dirt, debris, bird droppings, and environmental buildup that can significantly reduce your panels\' energy output.',
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
        heroVideo: 'images/services/Cleaning Services/Pressure Power Washing Services/video.mp4',
        heroImage: 'images/services/Cleaning Services/Pressure Power Washing Services/1.jpg',
        imageTop: 'images/services/Cleaning Services/Pressure Power Washing Services/1.jpg',
        imageBottom: 'images/services/Cleaning Services/Pressure Power Washing Services/2.jpg',
        fullDescription: 'At HBM, we provide powerful and effective pressure washing services that restore the original beauty and cleanliness of your property\'s exterior surfaces. Whether you\'re dealing with years of accumulated dirt, stubborn oil stains, graffiti, or weather-related discoloration, our professional pressure washing solutions deliver outstanding results. We work with residential, commercial, and industrial properties throughout the GTA, using state-of-the-art equipment and environmentally responsible cleaning methods.',
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
        title: 'Professional Window Installation',
        category: 'Installation Services',
        shortTitle: 'Window Installation',
        description: 'Professional window installation services for residential and commercial properties',
        heroVideo: 'images/services/Installation Services/Window Installation Services/video.mp4',
        heroImage: 'images/services/Installation Services/Window Installation Services/1.jpg',
        imageTop: 'images/services/Installation Services/Window Installation Services/1.jpg',
        imageBottom: 'images/services/Installation Services/Window Installation Services/2.jpg',
        intro: 'At HBM, we specialize in professional window installation for both residential and commercial properties. With over 8 years of experience, we provide top-quality installation that enhances both the appearance and energy efficiency of your space.',
        process: 'Our process begins with a personalized consultation where our team assesses your needs and recommends the best window styles, materials, and energy-efficient options. Whether you\'re upgrading existing windows, replacing outdated ones, or installing new windows in a renovation or new build, we ensure a seamless experience from start to finish.',
        quality: 'Our installation team uses the latest techniques and high-quality materials to guarantee a precise, secure fit. We take care to minimize disruption to your space while ensuring your windows are installed to the highest standards for performance and longevity.',
        support: 'After installation, we provide ongoing support to ensure your windows continue to perform at their best, including maintenance and repairs as needed.',
        benefits: [
            {
                title: 'Expert Guidance',
                description: 'We help you choose the right window solutions for your needs and budget.'
            },
            {
                title: 'Quality Materials',
                description: 'We use only high-quality windows from trusted manufacturers, ensuring durability and energy efficiency.'
            },
            {
                title: 'Precision Installation',
                description: 'Our skilled team ensures every window is installed with care and accuracy.'
            },
            {
                title: 'Customer Satisfaction',
                description: 'We focus on delivering a hassle-free experience with outstanding results.'
            }
        ],
        ctaTitle: 'Ready for new windows?',
        ctaDescription: 'Contact HBM for professional window installation services that improve your property\'s efficiency and appearance.',
        relatedServices: ['window-cleaning', 'glass-scratch-repair', 'caulking-glazing']
    },

    'isa-button-installation': {
        id: 'isa-button-installation',
        title: 'ISA Button Installation',
        category: 'Installation Services',
        shortTitle: 'ISA Button Installation',
        description: 'Professional ISA button installation for building safety and maintenance access',
        heroVideo: 'images/services/Installation Services/ISA Button Installation and Anchor Testing Services/video.mp4',
        heroImage: 'images/services/Installation Services/ISA Button Installation and Anchor Testing Services/1.jpg',
        imageTop: 'images/services/Installation Services/ISA Button Installation and Anchor Testing Services/1.jpg',
        imageBottom: 'images/services/Installation Services/ISA Button Installation and Anchor Testing Services/2.jpg',
        fullDescription: 'At HBM, we specialize in professional ISA button installation that ensures your building meets the highest safety standards for rope access work and maintenance operations. Whether you\'re managing a commercial high-rise, residential complex, or industrial facility, our certified technicians provide expert ISA button installation services that comply with all relevant safety codes and regulations, giving you reliable anchor points for safe building maintenance.',
        services: [
            {
                title: 'ISA Button Installation',
                description: 'Professional installation of ISA buttons for rope access anchor points on building facades and rooftops.'
            },
            {
                title: 'Safety Compliance Installation',
                description: 'Installation that meets all relevant building codes and safety regulations for maintenance access.'
            }
        ],
        benefits: [
            {
                title: 'Safety Compliance',
                description: 'Ensure your building meets safety standards for rope access work and maintenance.'
            },
            {
                title: 'Certified Installation',
                description: 'Our technicians are certified in proper ISA button installation techniques and safety protocols.'
            },
            {
                title: 'Durable Anchor Points',
                description: 'Professionally installed ISA buttons provide reliable, long-lasting anchor points for building maintenance.'
            }
        ],
        ctaTitle: 'Need ISA button installation?',
        ctaDescription: 'Contact HBM for professional ISA button installation services that ensure building safety compliance.',
        relatedServices: ['rope-access-training', 'window-cleaning', 'bollard-installation']
    },

    'painting-drywall': {
        id: 'painting-drywall',
        title: 'Painting and Drywall Repair Services',
        category: 'Repair & Maintenance Services',
        shortTitle: 'Painting & Drywall',
        description: 'Professional painting and drywall repair for interior and exterior surfaces',
        heroVideo: 'images/services/Repair & Maintenance Services/Painting and Drywall Repair Services/video.mp4',
        heroImage: 'images/services/Repair & Maintenance Services/Painting and Drywall Repair Services/1.jpg',
        imageTop: 'images/services/Repair & Maintenance Services/Painting and Drywall Repair Services/1.jpg',
        imageBottom: 'images/services/Repair & Maintenance Services/Painting and Drywall Repair Services/2.jpg',
        fullDescription: 'At HBM, we provide comprehensive painting and drywall repair services that transform and revitalize your property\'s interior and exterior spaces. Whether you\'re refreshing a single room, completing a full property makeover, or addressing damage from wear and tear, our skilled craftsmen deliver professional results that enhance both the beauty and value of your space. We work with residential homeowners, commercial property managers, and industrial facilities throughout the GTA.',
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
        category: 'Installation Services',
        shortTitle: 'Flooring Services',
        description: 'Professional flooring installation and repair for all types of flooring materials',
        heroVideo: 'images/services/Installation Services/Flooring Installation and Repair Services/video.mp4',
        heroImage: 'images/services/Installation Services/Flooring Installation and Repair Services/1.jpg',
        imageTop: 'images/services/Installation Services/Flooring Installation and Repair Services/1.jpg',
        imageBottom: 'images/services/Installation Services/Flooring Installation and Repair Services/2.jpg',
        fullDescription: 'At HBM, we offer expert flooring installation and repair services that enhance the functionality, durability, and aesthetic appeal of your residential or commercial space. Whether you\'re installing new flooring in a custom home, updating a commercial office space, or repairing damaged floors in an industrial facility, our experienced team works with all major flooring materials and installation methods to deliver results that meet your specific needs, budget, and timeline.',
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
        category: 'Installation Services',
        shortTitle: 'Bollard Installation',
        description: 'Professional bollard installation for property protection and traffic control',
        heroVideo: 'images/services/Installation Services/Bollard Installation Services/video.mp4',
        heroImage: 'images/services/Installation Services/Bollard Installation Services/1.jpg',
        imageTop: 'images/services/Installation Services/Bollard Installation Services/1.jpg',
        imageBottom: 'images/services/Installation Services/Bollard Installation Services/2.jpg',
        fullDescription: 'At HBM, we specialize in professional bollard installation services designed to protect your property, enhance security, and manage traffic flow effectively. Whether you need to safeguard pedestrian areas from vehicle intrusion, delineate parking zones, or create secure perimeters around sensitive areas, our experienced team provides custom bollard solutions for commercial properties, residential complexes, and industrial facilities throughout the GTA.',
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
        category: 'Repair & Maintenance Services',
        shortTitle: 'Brickwork Repair',
        description: 'Expert brickwork repair and restoration for building exteriors',
        heroVideo: 'images/services/Repair & Maintenance Services/Brickwork Repair Services/video.mp4',
        heroImage: 'images/services/Repair & Maintenance Services/Brickwork Repair Services/1.jpg',
        imageTop: 'images/services/Repair & Maintenance Services/Brickwork Repair Services/1.jpg',
        imageBottom: 'images/services/Repair & Maintenance Services/Brickwork Repair Services/2.jpg',
        fullDescription: 'At HBM, we provide expert brickwork repair and restoration services that preserve the structural integrity, weather resistance, and timeless beauty of brick buildings and facades. Whether you\'re dealing with minor mortar deterioration, significant structural damage, or comprehensive facade restoration, our skilled masons combine traditional craftsmanship with modern techniques to deliver lasting results that protect your investment and maintain your property\'s architectural character.',
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
        category: 'Repair & Maintenance Services',
        shortTitle: 'Glass Repair',
        description: 'Professional glass scratch repair to restore clarity and appearance',
        heroVideo: 'images/services/Repair & Maintenance Services/Glass Scratch Repair Service/video.mp4',
        heroImage: 'images/services/Repair & Maintenance Services/Glass Scratch Repair Service/1.jpg',
        imageTop: 'images/services/Repair & Maintenance Services/Glass Scratch Repair Service/1.jpg',
        imageBottom: 'images/services/Repair & Maintenance Services/Glass Scratch Repair Service/2.jpg',
        fullDescription: 'At HBM, we specialize in advanced glass scratch repair services that restore damaged glass surfaces to their original crystal-clear condition without the expense and disruption of complete replacement. Whether you\'re dealing with scratches on storefront windows, residential glass doors, or specialty glass installations, our skilled technicians use state-of-the-art equipment and proven techniques to eliminate scratches, restore optical clarity, and extend the life of your glass investments.',
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
        category: 'Repair & Maintenance Services',
        shortTitle: 'Caulking & Glazing',
        description: 'Professional sealing and glazing services for windows and building joints',
        heroVideo: 'images/services/Repair & Maintenance Services/Caulking and Glazing Services/video.mp4',
        heroImage: 'images/services/Repair & Maintenance Services/Caulking and Glazing Services/1.jpg',
        imageTop: 'images/services/Repair & Maintenance Services/Caulking and Glazing Services/1.jpg',
        imageBottom: 'images/services/Repair & Maintenance Services/Caulking and Glazing Services/2.jpg',
        fullDescription: 'At HBM, we provide professional caulking and glazing services that create effective seals around windows, doors, and building joints to prevent water infiltration, air leaks, and energy loss. Whether you\'re addressing maintenance issues in an existing building, completing new construction, or upgrading your property\'s energy efficiency, our experienced team uses high-quality materials and proven application techniques to deliver long-lasting seals that protect your building and reduce operating costs.',
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
        category: 'Repair & Maintenance Services',
        shortTitle: 'Interlocking',
        description: 'Professional interlocking stone installation and repair for driveways and walkways',
        heroVideo: 'images/services/Repair & Maintenance Services/Interlocking Services/video.mp4',
        heroImage: 'images/services/Repair & Maintenance Services/Interlocking Services/1.jpg',
        imageTop: 'images/services/Repair & Maintenance Services/Interlocking Services/1.jpg',
        imageBottom: 'images/services/Repair & Maintenance Services/Interlocking Services/2.jpg',
        fullDescription: 'At HBM, we specialize in professional interlocking stone installation and maintenance services that create beautiful, durable, and functional outdoor spaces. Whether you\'re designing a new driveway, creating elegant walkways, building a stunning patio, or enhancing your commercial property\'s exterior appeal, our experienced hardscaping team combines technical expertise with creative vision to deliver interlocking solutions that enhance your property\'s value and curb appeal while providing years of reliable performance.',
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
        category: 'Safety & Testing Services',
        shortTitle: 'Parking Striping',
        description: 'Professional parking lot line striping and marking services',
        heroVideo: 'images/services/Safety & Testing Services/Parking Line Striping Services/video.mp4',
        heroImage: 'images/services/Safety & Testing Services/Parking Line Striping Services/1.jpg',
        imageTop: 'images/services/Safety & Testing Services/Parking Line Striping Services/1.jpg',
        imageBottom: 'images/services/Safety & Testing Services/Parking Line Striping Services/2.jpg',
        fullDescription: 'At HBM, we provide comprehensive parking lot line striping and marking services that ensure safe, organized, and compliant parking areas for your commercial or residential property. Whether you\'re maintaining existing parking areas, creating new layouts, or updating markings to meet current accessibility standards, our experienced team uses high-quality paints and precise application techniques to deliver clear, durable markings that improve traffic flow, maximize parking capacity, and ensure compliance with local regulations.',
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
        category: 'Safety & Testing Services',
        shortTitle: 'Hoisting',
        description: 'Professional hoisting services for material transport and heavy lifting',
        heroVideo: 'images/services/Safety & Testing Services/Hoisting Services/video.mp4',
        heroImage: 'images/services/Safety & Testing Services/Hoisting Services/1.jpg',
        imageTop: 'images/services/Safety & Testing Services/Hoisting Services/1.jpg',
        imageBottom: 'images/services/Safety & Testing Services/Hoisting Services/2.jpg',
        fullDescription: 'At HBM, we provide safe and efficient hoisting services that facilitate the transport of materials, equipment, and personnel to elevated work areas during construction, renovation, and maintenance projects. Whether you\'re working on high-rise buildings, multi-story renovations, or complex industrial installations, our certified operators and state-of-the-art hoisting equipment ensure that materials reach their destination safely, efficiently, and on schedule, while maintaining the highest safety standards throughout the process.',
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
        relatedServices: ['anchor-testing', 'isa-button-installation', 'bollard-installation']
    },

    'anchor-testing': {
        id: 'anchor-testing',
        title: 'Anchor Testing Services',
        category: 'Safety & Testing Services',
        shortTitle: 'Anchor Testing',
        description: 'Professional anchor testing and certification for building safety compliance',
        heroVideo: 'images/services/Safety & Testing Services/Anchor Testing/video.mp4',
        heroImage: 'images/services/Safety & Testing Services/Anchor Testing/1.jpg',
        imageTop: 'images/services/Safety & Testing Services/Anchor Testing/1.jpg',
        imageBottom: 'images/services/Safety & Testing Services/Anchor Testing/2.jpg',
        fullDescription: 'At HBM, we provide comprehensive anchor testing and certification services that ensure your building\'s anchor points meet the highest safety standards for rope access work, fall protection systems, and maintenance operations. Whether you\'re managing a commercial high-rise, industrial facility, or residential complex, our certified testing technicians use advanced equipment and proven methodologies to verify anchor point strength, load capacity, and compliance with safety regulations, providing you with the documentation and confidence you need for safe building operations.',
        services: [
            {
                title: 'Load Testing',
                description: 'Professional load testing of anchor points to verify their capacity and safety for rope access work.'
            },
            {
                title: 'Safety Certification',
                description: 'Comprehensive safety certification and documentation for building anchor systems and fall protection equipment.'
            }
        ],
        benefits: [
            {
                title: 'Safety Compliance',
                description: 'Ensure your anchor points meet safety regulations and building codes for worker protection.'
            },
            {
                title: 'Professional Testing',
                description: 'Certified technicians provide thorough testing and detailed documentation of anchor point performance.'
            },
            {
                title: 'Risk Mitigation',
                description: 'Regular testing identifies potential issues before they become safety hazards.'
            }
        ],
        ctaTitle: 'Need anchor testing services?',
        ctaDescription: 'Contact HBM for professional anchor testing that ensures safety compliance and worker protection.',
        relatedServices: ['thermal-scanning', 'isa-button-installation', 'rope-access-training']
    },

    'concrete-testing': {
        id: 'concrete-testing',
        title: 'Concrete Testing Service',
        category: 'Safety & Testing Services',
        shortTitle: 'Concrete Testing',
        description: 'Professional concrete testing and quality assurance services',
        heroVideo: 'images/services/Safety & Testing Services/Concrete Testing Service/video.mp4',
        heroImage: 'images/services/Safety & Testing Services/Concrete Testing Service/1.jpg',
        imageTop: 'images/services/Safety & Testing Services/Concrete Testing Service/1.jpg',
        imageBottom: 'images/services/Safety & Testing Services/Concrete Testing Service/2.jpg',
        fullDescription: 'At HBM, we provide comprehensive concrete testing and quality assurance services that ensure your concrete installations meet or exceed project specifications, building codes, and industry standards. Whether you\'re overseeing new construction, infrastructure projects, or specialized concrete applications, our certified testing technicians use advanced equipment and proven methodologies to verify concrete strength, durability, and compliance, providing you with the documentation and confidence you need for successful project completion.',
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
        relatedServices: ['thermal-scanning', 'anchor-testing', 'bollard-installation']
    },

    'thermal-scanning': {
        id: 'thermal-scanning',
        title: 'Thermal Scanning Services',
        category: 'Safety & Testing Services',
        shortTitle: 'Thermal Scanning',
        description: 'Professional thermal imaging and scanning services for building diagnostics',
        heroVideo: 'images/services/Safety & Testing Services/Thermal Scanning Services/video.mp4',
        heroImage: 'images/services/Safety & Testing Services/Thermal Scanning Services/1.jpg',
        imageTop: 'images/services/Safety & Testing Services/Thermal Scanning Services/1.jpg',
        imageBottom: 'images/services/Safety & Testing Services/Thermal Scanning Services/2.jpg',
        fullDescription: 'At HBM, we provide advanced thermal scanning and imaging services that utilize state-of-the-art infrared technology to detect and analyze temperature variations in building systems, electrical components, and structural elements. Whether you\'re conducting preventive maintenance, investigating energy efficiency issues, or performing safety inspections, our certified thermographers deliver comprehensive thermal analysis that helps you identify problems before they become costly repairs, ensuring optimal performance and safety of your property systems.',
        services: [
            {
                title: 'Building Thermal Analysis',
                description: 'Comprehensive thermal imaging of building envelopes, HVAC systems, and insulation to identify energy loss and efficiency issues.'
            },
            {
                title: 'Electrical System Scanning',
                description: 'Professional thermal scanning of electrical panels, connections, and equipment to detect overheating and potential fire hazards.'
            }
        ],
        benefits: [
            {
                title: 'Early Problem Detection',
                description: 'Thermal scanning identifies issues before they become visible or cause system failures.'
            },
            {
                title: 'Energy Efficiency',
                description: 'Identify thermal bridges, insulation gaps, and air leaks that impact energy performance.'
            },
            {
                title: 'Safety Assessment',
                description: 'Detect overheating electrical components and potential fire hazards before they pose risks.'
            }
        ],
        ctaTitle: 'Need thermal scanning services?',
        ctaDescription: 'Contact HBM for professional thermal imaging services that reveal hidden issues and improve building performance.',
        relatedServices: ['concrete-testing', 'anchor-testing', 'window-cleaning']
    },

    // Training
    'rope-access-training': {
        id: 'rope-access-training',
        title: 'Rope Access Training Services',
        category: 'Safety & Testing Services',
        shortTitle: 'Rope Access Training',
        description: 'Professional rope access training and certification programs',
        heroVideo: 'images/services/Safety & Testing Services/Rope Access Training/video.mp4',
        heroImage: 'images/services/Safety & Testing Services/Rope Access Training/1.jpg',
        imageTop: 'images/services/Safety & Testing Services/Rope Access Training/1.jpg',
        imageBottom: 'images/services/Safety & Testing Services/Rope Access Training/2.jpg',
        fullDescription: 'At HBM, we provide comprehensive rope access training and certification programs that prepare technicians for safe and effective work in challenging elevated environments. Whether you are looking to advance your career in building maintenance, expand your skillset for industrial inspection work, or ensure your team meets the highest safety standards for rope access operations, our experienced instructors deliver hands-on training that combines theoretical knowledge with practical application in real-world scenarios.',
        services: [
            {
                title: 'Level 1 Training',
                description: 'Basic rope access training covering fundamental techniques and safety procedures.'
            },
            {
                title: 'Advanced Certification',
                description: 'Advanced rope access training for experienced technicians seeking higher certification levels. We also provide rescue training for emergency response situations.'
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
    'Cleaning Services': [
        'window-cleaning',
        'post-construction-cleaning',
        'roof-ceiling-cleaning',
        'solar-panel-cleaning', 
        'pressure-washing'
    ],
    'Installation Services': [
        'window-installation',
        'flooring',
        'bollard-installation',
        'isa-button-installation'
    ],
    'Repair & Maintenance Services': [
        'painting-drywall',
        'brickwork-repair',
        'glass-scratch-repair',
        'caulking-glazing',
        'interlocking'
    ],
    'Safety & Testing Services': [
        'anchor-testing',
        'concrete-testing',
        'thermal-scanning',
        'hoisting',
        'parking-line-striping',
        'rope-access-training'
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { serviceData, serviceCategories };
}