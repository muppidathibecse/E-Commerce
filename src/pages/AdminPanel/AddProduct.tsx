import { useForm } from "react-hook-form";
import {
  addProductToCategory,
} from "../../services/produtServices";
import {
  BackButton,
  ButtonContainer,
  Container,
  Input,
  Section,
  Title,
} from "./addProductStyles";
import {
  CancelOrderButton,
  PlaceOrderButton,
} from "../OrderSummary/orderSummaryStyles";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.state?.mode || "add";
  const product = location.state?.item || null;
  console.log(mode, " == ", product);
  const [isMode, setIsMode] = useState<"add" | "edit">(mode);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const payload = {
      cardName: data.cardName,
      cardImage: data.cardImage,
      cardReview: data.cardReviews,
      noOfStar: data.stars,
      newRs: data.newPrice,
      oldRs: data.oldPrice,
      defaultColorCode: data.colorCode,
      defaultColorName: data.colorName,
      defaultSize: data.size,
      isLiked: false,
      colors: [
        {
          colorCode: "#00000",
          colorName: "Black",
        },
        {
          colorCode: "#ff1b1b",
          colorName: "Black",
        },
        {
          colorCode: "#93e6ff",
          colorName: "Gray",
        },
      ],
      sizes: [1, 52, 55],
    };

    try {
      if (isMode === "edit") {
        console.log("Edit");
        toast.success("Updated Successfully!");
      } else {
        await addProductToCategory(data.productName, payload);
        toast.success("Added Successfully!");
      }

      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (isMode === "edit" && product) {
      reset({
        productName: location.state?.productName || "",
        cardName: product?.cardName || "",
        cardImage: product?.cardImage || "",
        cardReviews: product?.cardReview || "",
        stars: product?.noOfStar || "",
        newPrice: product?.newRs || "",
        oldPrice: product?.oldRs || "",
        colorCode: product?.defaultColorCode || "",
        colorName: product?.defaultColorName || "",
        size: product?.defaultSize || "",
      });
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Container>
            <Title>{isMode == "edit" ? "Edit Product" : "Add Product"}</Title>
            <BackButton
              onClick={() => {
                navigate(-1);
              }}
            >
              ← Back
            </BackButton>

            <Input
              placeholder="Product Name"
              {...register("productName", { required: true })}
              style={{ border: errors.productName ? "1px solid red" : "" }}
            />
            <Input
              placeholder="Card Name"
              {...register("cardName", { required: true })}
              style={{ border: errors.cardName ? "1px solid red" : "" }}
            />
            <Input
              placeholder="Card Image"
              {...register("cardImage", { required: true })}
              style={{ border: errors.cardImage ? "1px solid red" : "" }}
            />
            <Input
              placeholder="Card Reviews"
              {...register("cardReviews", { required: true })}
              style={{ border: errors.cardReviews ? "1px solid red" : "" }}
            />
            <Input
              type="number"
              placeholder="No of Stars"
              {...register("stars", { valueAsNumber: true, required: true })}
              style={{ border: errors.stars ? "1px solid red" : "" }}
            />
            <Input
              type="number"
              placeholder="New Rs"
              {...register("newPrice", { valueAsNumber: true, required: true })}
              style={{ border: errors.newPrice ? "1px solid red" : "" }}
            />
            <Input
              type="number"
              placeholder="Old Rs"
              {...register("oldPrice", { valueAsNumber: true, required: true })}
              style={{ border: errors.oldPrice ? "1px solid red" : "" }}
            />
            <Input
              placeholder="Default Color Code"
              {...register("colorCode", { required: true })}
              style={{ border: errors.colorCode ? "1px solid red" : "" }}
            />
            <Input
              placeholder="Default Color Name"
              {...register("colorName", { required: true })}
              style={{ border: errors.colorName ? "1px solid red" : "" }}
            />
            <Input
              type="number"
              placeholder="Default Size"
              {...register("size", { valueAsNumber: true, required: true })}
              style={{ border: errors.size ? "1px solid red" : "" }}
            />
            <ButtonContainer>
              <CancelOrderButton type="button" onClick={() => reset()}>
                Clear
              </CancelOrderButton>

              <PlaceOrderButton type="button" onClick={handleSubmit(onSubmit)}>
                {isMode == "add" ? "Add" : "Edit"}
              </PlaceOrderButton>
            </ButtonContainer>
          </Container>
        </Section>
      </form>
    </>
  );
};

export default AddProduct;
