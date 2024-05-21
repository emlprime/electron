import { createSignal, onCleanup } from "solid-js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Function to fetch games from Firestore
export const fetchBoards = (app) => {
  const db = getFirestore(app);
  const boardsCollectionRef = collection(db, "boards");

  const [boards, setBoards] = createSignal([]); // State to hold games data

  // Asynchronous function to fetch games
  const loadBoards = async () => {
    try {
      const querySnapshot = await getDocs(boardsCollectionRef);
      const boardsData = [];
      console.log("pds stuff");
      querySnapshot.forEach((doc) => {
        console.log("pds foo", { data: doc.data() });
        boardsData.push(doc.data());
      });
      setBoards(boardsData);
    } catch (error) {
      console.error("Error fetching boards:", error);
    }
  };

  // Load games initially
  loadBoards();

  // Clean up function (optional)
  onCleanup(() => {
    // Cleanup code (if needed)
  });

  // Return games data and function to refresh games
  return { boards, refreshGames: loadBoards };
};
