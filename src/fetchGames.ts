import { createSignal, onCleanup } from "solid-js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Function to fetch games from Firestore
export const fetchGames = (app) => {
  const db = getFirestore(app);
  const gamesCollectionRef = collection(db, "games");

  const [games, setGames] = createSignal([]); // State to hold games data

  // Asynchronous function to fetch games
  const loadGames = async () => {
    try {
      const querySnapshot = await getDocs(gamesCollectionRef);
      const gamesData = [];
      querySnapshot.forEach((doc) => {
        gamesData.push(doc.data());
      });
      setGames(gamesData);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  // Load games initially
  loadGames();

  // Clean up function (optional)
  onCleanup(() => {
    // Cleanup code (if needed)
  });

  // Return games data and function to refresh games
  return { games, refreshGames: loadGames };
};
