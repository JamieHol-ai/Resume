import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getSortedTimelineData() {
  // Get file names under /timeline
  const timelineDirectory = path.join(process.cwd(), 'timeline_items');
  const fileNames = fs.readdirSync(timelineDirectory);
  const allTimelineData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(timelineDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      description: matterResult.content,
    };
  });
  // Sort posts by year
  return allTimelineData.sort((a, b) => (a['end-date'] < b['end-date'] ? 1 : -1));
}