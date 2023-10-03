"use client";

import { Title } from "@/components/ui/title";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/carousel";

const reviews = [
  {
    name: "Nguyễn Đức Huy",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "Fullstack Developer & Giảng viên",
    description:
      "Với hơn 2 năm kinh nghiệm trong ngành Data Science cùng 5 năm kinh nghiệm trong lĩnh vực phát triển website và giảng dạy khóa Bootcamp, mình tin chắc là sẽ đem đến cho các bạn những buổi học đầy thú vị và chất lượng. Tham gia khóa học, các bạn sẽ được hướng dẫn cách học lập trình hiệu quả nhất cũng như góp phần hoạch định được chính xác con đường phát triển thành một lập trình viên chuyên nghiệp. Huy đang ở đây để sẵn sàng “on air” cùng bạn!",
  },
  {
    name: "Nguyễn Đức Huy",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "Fullstack Developer & Giảng viên",
    description:
      "Với hơn 2 năm kinh nghiệm trong ngành Data Science cùng 5 năm kinh nghiệm trong lĩnh vực phát triển website và giảng dạy khóa Bootcamp, mình tin chắc là sẽ đem đến cho các bạn những buổi học đầy thú vị và chất lượng. Tham gia khóa học, các bạn sẽ được hướng dẫn cách học lập trình hiệu quả nhất cũng như góp phần hoạch định được chính xác con đường phát triển thành một lập trình viên chuyên nghiệp. Huy đang ở đây để sẵn sàng “on air” cùng bạn!",
  },
  {
    name: "Nguyễn Đức Huy",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "Fullstack Developer & Giảng viên",
    description:
      "Với hơn 2 năm kinh nghiệm trong ngành Data Science cùng 5 năm kinh nghiệm trong lĩnh vực phát triển website và giảng dạy khóa Bootcamp, mình tin chắc là sẽ đem đến cho các bạn những buổi học đầy thú vị và chất lượng. Tham gia khóa học, các bạn sẽ được hướng dẫn cách học lập trình hiệu quả nhất cũng như góp phần hoạch định được chính xác con đường phát triển thành một lập trình viên chuyên nghiệp. Huy đang ở đây để sẵn sàng “on air” cùng bạn!",
  },
  {
    name: "Nguyễn Đức Huy",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    profession: "Fullstack Developer & Giảng viên",
    description:
      "Với hơn 2 năm kinh nghiệm trong ngành Data Science cùng 5 năm kinh nghiệm trong lĩnh vực phát triển website và giảng dạy khóa Bootcamp, mình tin chắc là sẽ đem đến cho các bạn những buổi học đầy thú vị và chất lượng. Tham gia khóa học, các bạn sẽ được hướng dẫn cách học lập trình hiệu quả nhất cũng như góp phần hoạch định được chính xác con đường phát triển thành một lập trình viên chuyên nghiệp. Huy đang ở đây để sẵn sàng “on air” cùng bạn!",
  },
];

interface Review {
  name: string;
  avatar: string;
  profession: string;
  description: string;
}

function ReviewCard({ name, avatar, profession, description }: Review) {
  return (
    <div className="max-w-4xl mx-auto bg-muted p-8 rounded-xl">
      <div className="flex flex-col justify-center gap-4">
        <div className="space-y-1 border-b pb-4 border-foreground/40">
          <h3 className="text-xl font-bold capitalize">{name}</h3>
          <div className="text-foreground/60">{profession}</div>
        </div>
        <div>
          <p className="text-lg font-medium leading-relaxed">
            <span className="text-2xl">“</span>
            {description}
            <span className="text-2xl">”</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <div className="space-y-16">
          <Title variant="h2">Our customers ❤️ PeopleForce</Title>
          <Carousel>
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
