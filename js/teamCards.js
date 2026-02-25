import { openMemberPopup } from "./popup.js";

const teamContainer=document.getElementById('team-container');

teamContainer.addEventListener('click', e=>{    
    const card=e.target.closest('.member-card');
    if(!card) return;

    const {name, role, bio}= card.dataset;
    openMemberPopup(name, role, bio);
})