// AI Chat Assistant for Mercure Logistics Congo
class MLCAIAssistant {
    constructor() {
        this.isOpen = false;
        this.knowledgeBase = {
            company: {
                name: "Mercure Logistics Congo (MLC)",
                description: "Fournisseur de solutions complètes de transport et de logistique",
                website: "www.mercure-logistics.com",
                workingHours: "Lundi au vendredi de 7h30 à 17h30, samedi de 8h00 à 12h00. Urgences 24h/7j",
                services: [
                    "Procédures douanières à l'import", "Procédures douanières à l'export", 
                    "Livraisons", "Opérations Transit", "Opérations Door to Door", 
                    "Opérations Multimodal", "BLD", "Transport routier", "Transport fluvial", 
                    "Fret aérien", "Fret maritime", "Entreposage", "Logistique portuaire", 
                    "Projet Cargo", "Transitaire", "Formalités douanières"
                ],
                warehouses: "5 entrepôts avec une superficie totale de 20 000 m²",
                coverage: "Plus de 50 pays dans le monde"
            },
            contacts: {
                general: {
                    address: "366 Avenue Jacques Opangault, Pointe-Noire, Congo",
                    phone: "+242 06 667 7374",
                    email: "contact@mercure-logistics.com"
                },
                staff: {
                    "TRAD Nasser": {
                        position: "Directeur Général",
                        phone: "+242 06 418 61 61",
                        email: "ceo@mercure-logistics.com"
                    },
                    "MASSINSA Ingrid": {
                        position: "Responsable commercial",
                        phone: "+242 06 735 38 81",
                        email: "ingrid.massinsa@mercure-logistics.com"
                    },
                    "MALENGA Farelle": {
                        position: "Agent du Cotation",
                        phone: "+242 06 735 23 40",
                        email: "pricing@mercure-logistics.com"
                    },
                    "BADAWI Kamal": {
                        position: "Directeur département transit PNR",
                        phone: "+242 06 735 98 82",
                        email: "kamal.badawi@mercure-logistics.com"
                    },
                    "JAOUAHDOU Skander": {
                        position: "Directeur financier",
                        phone: "+242 06 735 97 64",
                        email: "skander.jaouahdou@mercure-logistics.com"
                    },
                    "MPELE Geraldine": {
                        position: "CHEF D'AGENCE BZV",
                        phone: "+242 06 735 38 88",
                        email: "geraldine.mpele@mercure-logistics.com"
                    },
                    "KECHIM Achref": {
                        position: "Resp. Comptabilité transit",
                        phone: "+242 05 770 09 64",
                        email: "accounting@mercure-logistics.com"
                    },
                    "MBEMBA Maurrille": {
                        position: "Responsable Facturation",
                        phone: "+242 06 963 26 99",
                        email: "invoicing@mercure-logistics.com"
                    },
                    "BOWAO Donadieu": {
                        position: "Gestionnaire Ops Exports Maritime/Aérien",
                        phone: "+242 06 507 93 70 / +242 05 013 52 40",
                        email: "export@mercure-logistics.com / af.ops@mercure-logistics.com"
                    },
                    "TATY Aurore": {
                        position: "Gestionnaire Ops Imports Maritime",
                        phone: "+242 06 954 87 38",
                        email: "import@mercure-logistics.com"
                    },
                    "DORCHA NGOUALA": {
                        position: "Gestionnaire Ops Oilfield",
                        phone: "+242 06 636 89 16",
                        email: "oilfield.ops@mercure.logistics.com"
                    },
                    "NKOUNGA Martin": {
                        position: "Chargé des Ops. Ferroviaires",
                        phone: "+242 06 735 23 38",
                        email: "railway.ops@mercure-logistics.com"
                    },
                    "FOUTY Herbert": {
                        position: "Chargé des Ops. Multimodal",
                        phone: "+242 06 735 23 37",
                        email: "multimdal.coordinator@mercurelogistics.com"
                    },
                    "BANZOUZI Jacques": {
                        position: "Coordonnateur Ops. Dédouanement (CDZ)",
                        phone: "+242 06 934 93 63",
                        email: "Custums.coordinator@mercurelogistics.com"
                    },
                    "KOUMBA Gerald": {
                        position: "Assistant Ops Dédouanement (O&G)",
                        phone: "+242 06 969 57 29",
                        email: "Customs.assistant@mercure-logistics.com"
                    },
                    "NGALOUBARY Vanessia": {
                        position: "SERVICE Client Transit",
                        phone: "+242 06 735 38 91",
                        email: "Transit.pnr@mercure-logistics.com"
                    },
                    "IKOBO Rosty": {
                        position: "Service Client Transport",
                        phone: "+242 06 467 64 64",
                        email: "info@mercure-logistics.com"
                    }
                }
            },
            procedures: {
                import: {
                    maritime: {
                        documents: [
                            "Ordre de Transit (OT) signé et cacheté",
                            "Facture Commerciale / Liste de Colisage (CIPL) signées et cachetées",
                            "Facture fret",
                            "Connaissement B/L Original",
                            "BESC",
                            "COO Certificat d'origine",
                            "DI",
                            "Certificat de vérification (DPIV)",
                            "NIU de l'importateur",
                            "Attestation d'Exonération EXO ou attestation de franchise/taux réduits",
                            "Déclaration d'Exportation EX1/EXA du pays d'origine",
                            "Patente de l'année en cours"
                        ],
                        tasks: [
                            "Réception et ouvertures du dossier avec accusée de réception",
                            "Vérification et contrôle pour des besoins de conformité"
                        ]
                    },
                    aerien: {
                        documents: "Documents similaires à l'import maritime avec AWB au lieu de B/L"
                    }
                },
                export: {
                    maritime: "Procédures d'export maritime",
                    aerien: "Procédures d'export aérien",
                    produitsDangereux: "Gestion spécialisée des produits dangereux",
                    effetsPersonnels: "Traitement des effets personnels",
                    produitsForestiers: "Expertise en produits forestiers"
                },
                doorToDoor: "Opérations complètes de porte à porte",
                transit: {
                    im8: "Procédures IM8",
                    ex8: "Procédures EX8"
                },
                bld: "Services BLD spécialisés"
            },
            orderRequirements: [
                "Le régime douanier à appliquer",
                "La valeur de la marchandise",
                "Le nombre des colis et le poids brut",
                "Le numéro du connaissement (BL/AWB)",
                "La date prévue d'arrivée",
                "La description des tâches à effectuer par MLC",
                "Le lieu de livraison",
                "Le numéro de la cotation approuvée",
                "Les termes de paiement",
                "Les pièces jointes (copies facture proforma, liste colisage, connaissement)"
            ],
            bescInfo: {
                url: "http://www.ccc.cg/pages/besc.php",
                requirements: [
                    "La banque du client utilisée pour financer cette expédition",
                    "Le numéro du compte bancaire",
                    "Le numéro du NIU",
                    "Une copie du RCCM, la patente, et les statuts de la société"
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.addWelcomeMessage();
    }

    bindEvents() {
        const chatToggle = document.getElementById('chat-toggle');
        const chatClose = document.getElementById('chat-close');
        const sendBtn = document.getElementById('send-btn');
        const chatInput = document.getElementById('chat-input');

        chatToggle.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.closeChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Quick action buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-btn')) {
                this.handleQuickAction(e.target.dataset.action);
            }
        });
    }

    toggleChat() {
        const container = document.getElementById('chat-container');
        if (this.isOpen) {
            container.style.display = 'none';
            this.isOpen = false;
        } else {
            container.style.display = 'flex';
            this.isOpen = true;
        }
    }

    closeChat() {
        document.getElementById('chat-container').style.display = 'none';
        this.isOpen = false;
    }

    addWelcomeMessage() {
        // Message de bienvenue déjà dans le HTML
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message) return;

        this.addUserMessage(message);
        input.value = '';
        
        // Simulate typing
        this.showTyping();
        
        setTimeout(() => {
            this.hideTyping();
            this.processMessage(message);
        }, 1500);
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addBotMessage(message, quickActions = null) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        
        let quickActionsHTML = '';
        if (quickActions) {
            quickActionsHTML = `
                <div class="quick-actions">
                    ${quickActions.map(action => 
                        `<button class="quick-btn" data-action="${action.action}">${action.label}</button>`
                    ).join('')}
                </div>
            `;
        }
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                ${quickActionsHTML}
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTyping() {
        const messagesContainer = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        let response = "";
        let quickActions = null;

        // Analyse du message et génération de réponse enrichie
        if (lowerMessage.includes('service') || lowerMessage.includes('que faites-vous')) {
            response = `Mercure Logistics Congo offre une gamme complète de services :\n\n🚛 **Transport & Logistique :**\n• Transport routier\n• Transport multimodal\n• Transport fluvial\n• Fret aérien et maritime\n• Entreposage (5 entrepôts, 20 000 m²)\n• Logistique portuaire\n\n📋 **Services Douaniers :**\n• Procédures douanières import/export\n• Formalités douanières\n• Opérations Transit (IM8/EX8)\n• BLD\n\n🌍 **Services Spécialisés :**\n• Opérations Door to Door\n• Projet Cargo\n• Produits dangereux\n• Effets personnels\n• Produits forestiers\n\nNous couvrons plus de 50 pays dans le monde.`;
            quickActions = [
                {label: "Devis", action: "quote"},
                {label: "Contact", action: "contact"},
                {label: "Équipe", action: "team"}
            ];
        }
        else if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('adresse')) {
            response = `📞 **Contacts Mercure Logistics Congo :**\n\n🏢 **Siège social :**\n366 Avenue Jacques Opangault, Pointe-Noire, Congo\n\n📱 **Contact général :**\n+242 06 667 7374\n✉️ contact@mercure-logistics.com\n\n⏰ **Horaires :**\nLun-Ven : 7h30-17h30\nSamedi : 8h00-12h00\nUrgences : 24h/7j\n\n🌐 www.mercure-logistics.com`;
            quickActions = [
                {label: "Équipe", action: "team"},
                {label: "Services", action: "services"}
            ];
        }
        else if (lowerMessage.includes('équipe') || lowerMessage.includes('responsable') || lowerMessage.includes('directeur')) {
            response = `👥 **Équipe Mercure Logistics Congo :**\n\n🎯 **Direction :**\n• TRAD Nasser - Directeur Général\n  📞 +242 06 418 61 61\n\n💼 **Commercial :**\n• MASSINSA Ingrid - Resp. Commercial\n  📞 +242 06 735 38 81\n• MALENGA Farelle - Agent Cotation\n  📞 +242 06 735 23 40\n\n🚢 **Opérations :**\n• BADAWI Kamal - Dir. Transit PNR\n• TATY Aurore - Import Maritime\n• BOWAO Donadieu - Export Maritime/Aérien\n\n📞 **Service Client :**\n• NGALOUBARY Vanessia - Transit\n• IKOBO Rosty - Transport`;
            quickActions = [
                {label: "Contact", action: "contact"},
                {label: "Services", action: "services"}
            ];
        }
        else if (lowerMessage.includes('import') || lowerMessage.includes('importation')) {
            response = `📥 **Services d'Import MLC :**\n\n🚢 **Import Maritime :**\n📋 Documents requis :\n• Ordre de Transit (OT) signé\n• Facture commerciale/Liste colisage\n• Connaissement B/L original\n• BESC, COO, DI, DPIV\n• NIU importateur\n• Patente année en cours\n\n✈️ **Import Aérien :**\nDocuments similaires avec AWB\n\n⚙️ **Nos tâches :**\n• Réception et ouverture dossier\n• Vérification conformité\n• Dédouanement complet\n\n📞 Contact Import : TATY Aurore\n+242 06 954 87 38`;
        }
        else if (lowerMessage.includes('export') || lowerMessage.includes('exportation')) {
            response = `📤 **Services d'Export MLC :**\n\n🚢 **Export Maritime**\n✈️ **Export Aérien**\n\n🔥 **Spécialisations :**\n• Produits dangereux\n• Effets personnels\n• Produits forestiers\n• Projet Cargo\n\n📞 Contact Export : BOWAO Donadieu\n+242 06 507 93 70\n✉️ export@mercure-logistics.com\n\nNous gérons toutes les formalités d'export selon les réglementations internationales.`;
        }
        else if (lowerMessage.includes('besc')) {
            response = `📋 **BESC (Bordereau Électronique de Suivi des Cargaisons) :**\n\n🌐 Pour souscrire un BESC :\nhttp://www.ccc.cg/pages/besc.php\n\n📄 **Documents requis :**\n• Banque de financement\n• Numéro compte bancaire\n• Numéro NIU\n• Copie RCCM, patente, statuts\n\nLe BESC est obligatoire pour toutes les importations au Congo.`;
        }
        else if (lowerMessage.includes('door to door') || lowerMessage.includes('porte à porte')) {
            response = `🚪 **Services Door to Door MLC :**\n\n📦 **Solution complète :**\n• Enlèvement chez l'expéditeur\n• Transport international\n• Dédouanement\n• Livraison finale\n\n🌍 **Avantages :**\n• Un seul interlocuteur\n• Suivi complet\n• Responsabilité totale\n• Optimisation des coûts\n\n📞 Contact : +242 06 667 7374`;
        }
        else if (lowerMessage.includes('transit') || lowerMessage.includes('im8') || lowerMessage.includes('ex8')) {
            response = `🔄 **Opérations Transit MLC :**\n\n📋 **Types de transit :**\n• IM8 - Import transit\n• EX8 - Export transit\n• Marchandises en transit\n\n⚡ **Avantages :**\n• Procédures simplifiées\n• Délais réduits\n• Coûts optimisés\n\n📞 Contact Transit : NGALOUBARY Vanessia\n+242 06 735 38 91\n✉️ Transit.pnr@mercure-logistics.com`;
        }
        else if (lowerMessage.includes('devis') || lowerMessage.includes('prix') || lowerMessage.includes('tarif') || lowerMessage.includes('cotation')) {
            response = `💰 **Demande de Devis MLC :**\n\n📋 **Informations requises :**\n• Type de marchandise\n• Poids et dimensions\n• Origine et destination\n• Mode de transport\n• Régime douanier\n• Valeur marchandise\n• Date prévue\n\n📞 **Contact Cotation :**\nMALENGA Farelle\n+242 06 735 23 40\n✉️ pricing@mercure-logistics.com\n\nDevis gratuit sous 24h !`;
            quickActions = [
                {label: "Contact", action: "contact"},
                {label: "Services", action: "services"}
            ];
        }
        else if (lowerMessage.includes('ordre de transit') || lowerMessage.includes('ot')) {
            response = `📄 **Ordre de Transit (OT) - Requis :**\n\n✅ **Informations obligatoires :**\n• Régime douanier à appliquer\n• Valeur de la marchandise\n• Nombre de colis et poids brut\n• Numéro connaissement (BL/AWB)\n• Date prévue d'arrivée\n• Description des tâches MLC\n• Lieu de livraison\n• Numéro cotation approuvée\n• Termes de paiement\n• Pièces jointes\n\n⚠️ L'OT doit être signé et cacheté par le client.`;
        }
        else if (lowerMessage.includes('horaire') || lowerMessage.includes('ouvert') || lowerMessage.includes('fermé')) {
            response = `⏰ **Horaires Mercure Logistics Congo :**\n\n🗓️ **Horaires normaux :**\nLundi au vendredi : 7h30 - 17h30\nSamedi : 8h00 - 12h00\n\n🚨 **Urgences :**\n24 heures sur 24, 7 jours sur 7\n\n📞 Numéros d'urgence disponibles\ndans nos contacts`;
        }
        else if (lowerMessage.includes('entrepôt') || lowerMessage.includes('stockage') || lowerMessage.includes('entreposage')) {
            response = `🏭 **Nos Entrepôts MLC :**\n\n📊 **Capacités :**\n• 5 entrepôts modernes\n• Superficie totale : 20 000 m²\n• Stockage sécurisé\n• Gestion informatisée\n\n🔒 **Services :**\n• Réception marchandises\n• Stockage longue/courte durée\n• Préparation commandes\n• Distribution\n• Inventaires\n\n📞 Contact : +242 06 667 7374`;
        }
        else if (lowerMessage.includes('merci') || lowerMessage.includes('au revoir')) {
            response = `Merci de votre confiance en Mercure Logistics Congo ! 🙏\n\nNous restons à votre disposition pour tous vos besoins logistiques.\n\n📞 +242 06 667 7374\n✉️ contact@mercure-logistics.com\n\nÀ bientôt ! 🚛✈️🚢`;
        }
        else {
            response = `Bonjour ! Je suis l'assistant virtuel de Mercure Logistics Congo. 🤖\n\nJe peux vous renseigner sur :\n\n📋 **Nos services :**\n• Import/Export maritime & aérien\n• Transport routier & fluvial\n• Entreposage & distribution\n• Formalités douanières\n• Opérations Door to Door\n\n👥 **Notre équipe**\n💰 **Demandes de devis**\n📞 **Contacts & horaires**\n\nComment puis-je vous aider ?`;
            quickActions = [
                {label: "Services", action: "services"},
                {label: "Contact", action: "contact"},
                {label: "Équipe", action: "team"},
                {label: "Devis", action: "quote"}
            ];
        }

        this.addBotMessage(response, quickActions);
    }

    handleQuickAction(action) {
        switch(action) {
            case 'services':
                this.processMessage('Quels sont vos services ?');
                break;
            case 'contact':
                this.processMessage('Comment vous contacter ?');
                break;
            case 'quote':
                this.processMessage('Je voudrais un devis');
                break;
            case 'team':
                this.processMessage('Qui sont les responsables ?');
                break;
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chat-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize the AI Assistant when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new MLCAIAssistant();
});