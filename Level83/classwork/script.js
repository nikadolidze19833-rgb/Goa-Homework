
async function getEmoji() {
    try {
        const response = await fetch("https://eeemoji.com/api/v1/emojis/fire");

        const data = await response.json();

        console.log("Emoji:", data.emoji);
        console.log("Name:", data.name);
        console.log("Slug:", data.slug);
        console.log("Hexcode:", data.hexcode);
        console.log("Related:", data.related);

    } catch (error) {
        console.error("Error:", error);
    }
}

getEmoji();
