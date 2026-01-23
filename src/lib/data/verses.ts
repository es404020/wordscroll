export interface Verse {
    text: string;
    reference: string;
    type: 'memory' | 'passage';
}

export const verses: Verse[] = [
    {
        text: "I can do all this through him who gives me strength.",
        reference: "Philippians 4:13 (NIV)",
        type: 'memory'
    },
    {
        text: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11 (NIV)",
        type: 'memory'
    },
    {
        text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6 (NIV)",
        type: 'memory'
    },
    {
        text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name’s sake. Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
        reference: "Psalm 23:1-4 (NIV)",
        type: 'passage'
    },
    {
        text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
        reference: "Galatians 5:22-23 (NIV)",
        type: 'passage'
    }
];
