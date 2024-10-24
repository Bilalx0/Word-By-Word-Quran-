let currentSurah = 1;
let currentPage = 1;
const versesPerPage = 20;
let isLoading = false;
let currentLanguage = 'en';
let isWordByWord = true;

// Translation IDs for different languages
const translations = {
    en: '131', 
    ur: '234'  
};

// Word translations for different languages
const wordTranslations = {
    en: 'translation',  
    ur: 'translation'  
};

        // Surah metadata
const surahs = [
{ number: 1, name: "Al-Fatihah", verses: 7 },
{ number: 2, name: "Al-Baqarah", verses: 286 },
{ number: 3, name: "Aali Imran", verses: 200 },
{ number: 4, name: "An-Nisa", verses: 176 },
{ number: 5, name: "Al-Ma'idah", verses: 120 },
{ number: 6, name: "Al-An'am", verses: 165 },
{ number: 7, name: "Al-A'raf", verses: 206 },
{ number: 8, name: "Al-Anfal", verses: 75 },
{ number: 9, name: "At-Tawbah", verses: 129 },
{ number: 10, name: "Yunus", verses: 109 },
{ number: 11, name: "Hud", verses: 123 },
{ number: 12, name: "Yusuf", verses: 111 },
{ number: 13, name: "Ar-Ra'd", verses: 43 },
{ number: 14, name: "Ibrahim", verses: 52 },
{ number: 15, name: "Al-Hijr", verses: 99 },
{ number: 16, name: "An-Nahl", verses: 128 },
{ number: 17, name: "Al-Isra", verses: 111 },
{ number: 18, name: "Al-Kahf", verses: 110 },
{ number: 19, name: "Maryam", verses: 98 },
{ number: 20, name: "Taha", verses: 135 },
{ number: 21, name: "Al-Anbiya", verses: 112 },
{ number: 22, name: "Al-Hajj", verses: 78 },
{ number: 23, name: "Al-Mu'minun", verses: 118 },
{ number: 24, name: "An-Nur", verses: 64 },
{ number: 25, name: "Al-Furqan", verses: 77 },
{ number: 26, name: "Ash-Shu'ara", verses: 227 },
{ number: 27, name: "An-Naml", verses: 93 },
{ number: 28, name: "Al-Qasas", verses: 88 },
{ number: 29, name: "Al-Ankabut", verses: 69 },
{ number: 30, name: "Ar-Rum", verses: 60 },
{ number: 31, name: "Luqman", verses: 34 },
{ number: 32, name: "As-Sajda", verses: 30 },
{ number: 33, name: "Al-Ahzab", verses: 73 },
{ number: 34, name: "Saba", verses: 54 },
{ number: 35, name: "Fatir", verses: 45 },
{ number: 36, name: "Yaseen", verses: 83 },
{ number: 37, name: "As-Saffat", verses: 182 },
{ number: 38, name: "Sad", verses: 88 },
{ number: 39, name: "Az-Zumar", verses: 75 },
{ number: 40, name: "Ghafir", verses: 85 },
{ number: 41, name: "Fussilat", verses: 54 },
{ number: 42, name: "Ash-Shura", verses: 53 },
{ number: 43, name: "Az-Zukhruf", verses: 89 },
{ number: 44, name: "Ad-Dukhan", verses: 59 },
{ number: 45, name: "Al-Jathiyah", verses: 37 },
{ number: 46, name: "Al-Ahqaf", verses: 35 },
{ number: 47, name: "Muhammad", verses: 38 },
{ number: 48, name: "Al-Fath", verses: 29 },
{ number: 49, name: "Al-Hujurat", verses: 18 },
{ number: 50, name: "Qaf", verses: 45 },
{ number: 51, name: "Adh-Dhariyat", verses: 60 },
{ number: 52, name: "At-Tur", verses: 49 },
{ number: 53, name: "An-Najm", verses: 62 },
{ number: 54, name: "Al-Qamar", verses: 55 },
{ number: 55, name: "Ar-Rahman", verses: 78 },
{ number: 56, name: "Al-Waqia", verses: 96 },
{ number: 57, name: "Al-Hadid", verses: 29 },
{ number: 58, name: "Al-Mujadila", verses: 22 },
{ number: 59, name: "Al-Hashr", verses: 24 },
{ number: 60, name: "Al-Mumtahina", verses: 13 },
{ number: 61, name: "As-Saff", verses: 14 },
{ number: 62, name: "Al-Jumuah", verses: 11 },
{ number: 63, name: "Al-Munafiqun", verses: 11 },
{ number: 64, name: "At-Taghabun", verses: 18 },
{ number: 65, name: "At-Talaq", verses: 12 },
{ number: 66, name: "At-Tahrim", verses: 12 },
{ number: 67, name: "Al-Mulk", verses: 30 },
{ number: 68, name: "Al-Qalam", verses: 52 },
{ number: 69, name: "Al-Haqqah", verses: 52 },
{ number: 70, name: "Al-Ma'arij", verses: 44 },
{ number: 71, name: "Nuh", verses: 28 },
{ number: 72, name: "Al-Jinn", verses: 28 },
{ number: 73, name: "Al-Muzzammil", verses: 20 },
{ number: 74, name: "Al-Muddathir", verses: 56 },
{ number: 75, name: "Al-Qiyamah", verses: 40 },
{ number: 76, name: "Al-Insan", verses: 31 },
{ number: 77, name: "Al-Mursalat", verses: 50 },
{ number: 78, name: "An-Naba", verses: 40 },
{ number: 79, name: "An-Naziat", verses: 46 },
{ number: 80, name: "Abasa", verses: 42 },
{ number: 81, name: "At-Takwir", verses: 29 },
{ number: 82, name: "Al-Infitar", verses: 19 },
{ number: 83, name: "Al-Mutaffifin", verses: 36 },
{ number: 84, name: "Al-Inshiqaq", verses: 25 },
{ number: 85, name: "Al-Buruj", verses: 22 },
{ number: 86, name: "At-Tariq", verses: 17 },
{ number: 87, name: "Al-Ala", verses: 19 },
{ number: 88, name: "Al-Ghashiyah", verses: 26 },
{ number: 89, name: "Al-Fajr", verses: 30 },
{ number: 90, name: "Al-Balad", verses: 20 },
{ number: 91, name: "Ash-Shams", verses: 15 },
{ number: 92, name: "Al-Layl", verses: 21 },
{ number: 93, name: "Ad-Duha", verses: 11 },
{ number: 94, name: "Ash-Sharh", verses: 8 },
{ number: 95, name: "At-Tin", verses: 8 },
{ number: 96, name: "Al-Alaq", verses: 19 },
{ number: 97, name: "Al-Qadr", verses: 5 },
{ number: 98, name: "Al-Bayyinah", verses: 8 },
{ number: 99, name: "Az-Zalzalah", verses: 8 },
{ number: 100, name: "Al-Adiyat", verses: 11 },
{ number: 101, name: "Al-Qariah", verses: 11 },
{ number: 102, name: "At-Takathur", verses: 8 },
{ number: 103, name: "Al-Asr", verses: 3 },
{ number: 104, name: "Al-Humazah", verses: 9 },
{ number: 105, name: "Al-Fil", verses: 5 },
{ number: 106, name: "Quraysh", verses: 4 },
{ number: 107, name: "Al-Ma'un", verses: 7 },
{ number: 108, name: "Al-Kawthar", verses: 3 },
{ number: 109, name: "Al-Kafirun", verses: 6 },
{ number: 110, name: "An-Nasr", verses: 3 },
{ number: 111, name: "Al-Masad", verses: 5 },
{ number: 112, name: "Al-Ikhlas", verses: 4 },
{ number: 113, name: "Al-Falaq", verses: 5 },
{ number: 114, name: "An-Nas", verses: 6 }
];


async function fetchVerses(surahNumber, page, language) {
    const url = `https://api.quran.com/api/v4/verses/by_chapter/${surahNumber}`;
    const params = new URLSearchParams({
        words: 'true',
        translations: translations[language],
        language: language,
        page,
        per_page: versesPerPage,
        word_fields: `text_uthmani,${wordTranslations[language]}`
    });

    const response = await fetch(`${url}?${params}`);
    if (!response.ok) {
        throw new Error('Failed to fetch verses');
    }
    return response.json();
}

// New function to fetch a specific verse
async function fetchSpecificVerse(surahNumber, verseNumber) {
    const url = `https://api.quran.com/api/v4/verses/by_key/${surahNumber}:${verseNumber}`;
    const params = new URLSearchParams({
        words: 'true',
        translations: translations[currentLanguage],
        language: currentLanguage,
        word_fields: `text_uthmani,${wordTranslations[currentLanguage]}`
    });

    const response = await fetch(`${url}?${params}`);
    if (!response.ok) {
        throw new Error('Failed to fetch verse');
    }
    return response.json();
}

function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
    document.getElementById('loadMoreBtn').style.display = show ? 'none' : 'block';
}

function showError(message) {
    document.getElementById('error').style.display = 'block';
    document.getElementById('errorText').textContent = message;
    showLoading(false);
}
function createVerseElement(verse, language) {
    const verseDiv = document.createElement('div');
    verseDiv.className = 'py-6 mb-3 border-b border-gray-400';
    
    const translationClass = language === 'ur' ? 'urdu-text text-right' : 'text-left';
    
    // Combine words to create complete Arabic text
    const completeArabicText = verse.words.map(word => word.text_uthmani).join(' ');
    
    if (isWordByWord) {
        // Word by word view
        verseDiv.innerHTML = `
            <div class="text-center mb-4">
                <span class="text-sm text-gray-500">Verse ${verse.verse_key}</span>
            </div>
            <div class="flex flex-wrap flex-row-reverse gap-2">
                ${verse.words.map(word => `
                    <div class="word-wrap flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                        <span class="text-lg sm:text-xl md:text-2xl mb-2 arabic-text text-cyan-900">${word.text_uthmani}</span>
                        <span class="text-base py-2 text-gray-600 ${language === 'ur' ? 'urdu-text' : ''}">${word.translation.text || '-'}</span>
                    </div>
                `).join('')}
            </div>
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                <p class="text-cyan-900 ${translationClass}">${verse.translations[0].text}</p>
            </div>
        `;
    } else {
        // Simple translation view
        verseDiv.innerHTML = `
            <div class="text-center mb-4">
                <span class="text-sm text-gray-500">Verse ${verse.verse_key}</span>
            </div>
            <div class="mb-4">
                <p class="text-lg sm:text-xl md:text-2xl arabic-text text-cyan-900 text-right leading-[3.5rem]">${completeArabicText}</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg">
                <p class="text-cyan-900 ${translationClass}">${verse.translations[0].text}</p>
            </div>
        `;
    }
    
    return verseDiv;
}

async function loadMoreVerses() {
    if (isLoading) return;
    
    try {
        isLoading = true;
        showLoading(true);
        
        const data = await fetchVerses(currentSurah, currentPage, currentLanguage);
        const versesContainer = document.getElementById('versesContainer');
        
        data.verses.forEach(verse => {
            versesContainer.appendChild(createVerseElement(verse, currentLanguage));
        });
        
        currentPage++;
        
        const currentSurahData = surahs.find(s => s.number === currentSurah);
        if (currentPage * versesPerPage >= currentSurahData.verses) {
            document.getElementById('loadMoreBtn').style.display = 'none';
        }
        
    } catch (error) {
        showError('Error loading verses. Please try again.');
        console.error('Error details:', error);
    } finally {
        isLoading = false;
        showLoading(false);
    }
}

function populateSurahSelect() {
    const select = document.getElementById('surahSelect');
    surahs.forEach(surah => {
        const option = document.createElement('option');
        option.value = surah.number;
        option.textContent = `${surah.name} (${surah.verses} verses)`;
        select.appendChild(option);
    });
}

function changeSurah() {
    const surahNumber = parseInt(document.getElementById('surahSelect').value);
    currentSurah = surahNumber;
    currentPage = 1;
    document.getElementById('versesContainer').innerHTML = '';
    document.getElementById('loadMoreBtn').style.display = 'block';
    loadMoreVerses();
}

function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    currentPage = 1;
    document.getElementById('versesContainer').innerHTML = '';
    document.getElementById('loadMoreBtn').style.display = 'block';
    loadMoreVerses();
}

function changeView() {
    isWordByWord = document.getElementById('viewSelect').value === 'word-by-word';
    currentPage = 1;
    document.getElementById('versesContainer').innerHTML = '';
    document.getElementById('loadMoreBtn').style.display = 'block';
    loadMoreVerses();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateSurahSelect();
    loadMoreVerses();
});





// New function to handle verse search
async function searchVerse() {
    const searchInput = document.getElementById('verseSearch').value;
    const [surahNum, verseNum] = searchInput.split(':').map(num => num.trim());
    
    if (!surahNum || !verseNum) {
        showError('Please enter verse number in format "surah:verse" (e.g., 2:255)');
        return;
    }

    const surahNumber = parseInt(surahNum);
    const verseNumber = parseInt(verseNum);

    // Validate surah and verse numbers
    const surah = surahs.find(s => s.number === surahNumber);
    if (!surah) {
        showError('Invalid Surah number. Please enter a number between 1 and 114.');
        return;
    }

    if (verseNumber < 1 || verseNumber > surah.verses) {
        showError(`Invalid verse number. Surah ${surah.name} has ${surah.verses} verses.`);
        return;
    }

    try {
        isLoading = true;
        showLoading(true);
        document.getElementById('error').style.display = 'none';
        
        const data = await fetchSpecificVerse(surahNumber, verseNumber);
        const versesContainer = document.getElementById('versesContainer');
        versesContainer.innerHTML = ''; // Clear current content
        
        if (data.verse) {
            versesContainer.appendChild(createVerseElement(data.verse, currentLanguage));
            // Update the surah select to match the search
            document.getElementById('surahSelect').value = surahNumber;
            currentSurah = surahNumber;
        } else {
            showError('Verse not found');
        }
        
        // Hide load more button when showing search results
        document.getElementById('loadMoreBtn').style.display = 'none';
        
    } catch (error) {
        showError('Error loading verse. Please try again.');
        console.error('Error details:', error);
    } finally {
        isLoading = false;
        showLoading(false);
    }
}

// New function to clear search and return to normal view
function clearSearch() {
    document.getElementById('verseSearch').value = '';
    document.getElementById('error').style.display = 'none';
    currentPage = 1;
    document.getElementById('versesContainer').innerHTML = '';
    document.getElementById('loadMoreBtn').style.display = 'block';
    loadMoreVerses();
}

