/* =====================================================
   Main Script | Healthcare Support Platform
   Author: Frontend Module
   Purpose: Centralized user navigation & access control
===================================================== */

(function ($, window, document) {
    "use strict";

    // ---------------- CONFIG ----------------
    const CONFIG = {
        REGISTER_PAGE: "register.html"
    };

    // ---------------- UTILITY FUNCTIONS ----------------
    const navigateToRegister = () => {
        window.location.assign(CONFIG.REGISTER_PAGE);
    };

    // ---------------- EVENT BINDERS ----------------
    const bindNavigationEvents = () => {

        // Navbar links
        $(".nav-links").on("click", "a", function (e) {
            e.preventDefault();
            navigateToRegister();
        });

        // Primary CTA button
        $(".btn-primary").on("click", function () {
            navigateToRegister();
        });

        // Service cards
        $(".services").on("click", ".card", function () {
            navigateToRegister();
        });
    };

    // ---------------- UI ENHANCEMENTS ----------------
    const enhanceUI = () => {
        $(".card, .btn-primary, .nav-links a")
            .attr("role", "button")
            .css("cursor", "pointer");
    };

    // ---------------- INIT ----------------
    const init = () => {
        bindNavigationEvents();
        enhanceUI();
    };

    // DOM Ready
    $(document).ready(init);

})(jQuery, window, document);

// Priority Doctor Help Button
$("#doctorHelpBtn").on("click", function () {
    window.location.href = "register.html";
});
