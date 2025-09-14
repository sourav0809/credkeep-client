import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/common/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { Card, CardContent, CardHeader } from "@/common/components/ui/card";
import { Badge } from "@/common/components/ui/badge";

const problems = [
  {
    id: 1,
    name: "Two Sum",
    difficulty: "Easy",
    status: "Solved",
    nextReview: "2024-01-15",
  },
  {
    id: 2,
    name: "Binary Tree Inorder Traversal",
    difficulty: "Medium",
    status: "Due Today",
    nextReview: "2024-01-10",
  },
  {
    id: 3,
    name: "Merge k Sorted Lists",
    difficulty: "Hard",
    status: "Upcoming",
    nextReview: "2024-01-20",
  },
  {
    id: 4,
    name: "Valid Parentheses",
    difficulty: "Easy",
    status: "Solved",
    nextReview: "2024-01-18",
  },
  {
    id: 5,
    name: "Maximum Subarray",
    difficulty: "Medium",
    status: "Due Today",
    nextReview: "2024-01-10",
  },
  {
    id: 6,
    name: "Longest Palindromic Substring",
    difficulty: "Medium",
    status: "Upcoming",
    nextReview: "2024-01-25",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-success/10 text-success-foreground hover:bg-success/20";
    case "Medium":
      return "bg-warning/10 text-warning-foreground hover:bg-warning/20";
    case "Hard":
      return "bg-destructive/10 text-destructive-foreground hover:bg-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Solved":
      return "bg-success/10 text-success-foreground hover:bg-success/20";
    case "Due Today":
      return "bg-warning/10 text-warning-foreground hover:bg-warning/20";
    case "Upcoming":
      return "bg-info/10 text-info-foreground hover:bg-info/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function ProblemsTable() {
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      difficultyFilter === "all" || problem.difficulty === difficultyFilter;
    const matchesStatus =
      statusFilter === "all" || problem.status === statusFilter;

    return matchesSearch && matchesDifficulty && matchesStatus;
  });

  const displayedProblems = filteredProblems.slice(0, itemsPerPage);

  return (
    <div>
      <Card className="border-border shadow-soft">
        <CardHeader>
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search problems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Select
                value={difficultyFilter}
                onValueChange={setDifficultyFilter}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulty</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Solved">Solved</SelectItem>
                  <SelectItem value="Due Today">Due Today</SelectItem>
                  <SelectItem value="Upcoming">Upcoming</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent className="min-h-[40vh]">
          <div className="rounded-lg border border-border overflow- h-full">
            <div className="overflow-x-auto h-full">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 px-10">
                    <TableHead className="font-semibold">
                      Problem Name
                    </TableHead>
                    <TableHead className="font-semibold">Difficulty</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Next Review</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedProblems.map((problem) => (
                    <TableRow
                      key={problem.id}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-medium text-card-foreground">
                        {problem.name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={getDifficultyColor(problem.difficulty)}
                        >
                          {problem.difficulty}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={getStatusColor(problem.status)}
                        >
                          {problem.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {problem.nextReview}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
