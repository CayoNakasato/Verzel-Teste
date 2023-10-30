import { Button, Flex, Text } from "@chakra-ui/react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { ChangePageButtonsProps } from "../../../../interfaces/Vehicle/vehicle.interface";

export const ChangePageButtons: React.FC<ChangePageButtonsProps> = ({
  vehiclesPagination,
  onPageChange,
}) => {
  const { currentPage, limit, totalItems } = vehiclesPagination;

  const totalPages = Math.ceil(totalItems / limit);

  const scrollPageToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(+currentPage - 1);
      scrollPageToTop();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(+currentPage + 1);
      scrollPageToTop();
    }
  };

  const handleFirstPage = () => {
    onPageChange(1);
    scrollPageToTop();
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
    scrollPageToTop();
  };
  return (
    <>
      <Flex
        alignItems={"center"}
        gap={"10px"}
        margin={"0 auto"}
        padding={"30px"}
      >
        <Button
          variant={"ghost"}
          onClick={handleFirstPage}
          fontSize={{ base: "sm", md: "xl" }}
        >
          <FaAngleDoubleLeft />
        </Button>
        <Button
          backgroundColor={"black"}
          color={"white"}
          onClick={handlePreviousPage}
          fontSize={{ base: "sm", md: "xl" }}
        >
          <FaAngleLeft />
        </Button>
        <Text fontWeight={"600"} fontSize={{ base: "sm", md: "xl" }}>
          {" "}
          {currentPage} de {totalPages}
        </Text>
        <Button
          backgroundColor={"black"}
          color={"white"}
          onClick={handleNextPage}
          fontSize={{ base: "sm", md: "lg" }}
        >
          <FaAngleRight />
        </Button>
        <Button
          variant={"ghost"}
          onClick={handleLastPage}
          fontSize={{ base: "sm", md: "lg" }}
        >
          <FaAngleDoubleRight />
        </Button>
      </Flex>
    </>
  );
};
