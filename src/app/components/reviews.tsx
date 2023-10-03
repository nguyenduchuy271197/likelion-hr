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
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center p-2 bg-white rounded-[30px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="relative aspect-[1/1] w-28 bg-black overflow-hidden rounded-[30px] bg-gradient-to-r from-rose-400 to-orange-300">
            <Image
              src={"" && avatar}
              fill
              alt={name}
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-1 text-center sm:space-y-2">
          <h3 className="text-2xl font-bold capitalize">{name}</h3>
          <div className="text-lg text-foreground/60">{profession}</div>
        </div>
        <div>
          <p className="text-xl font-medium leading-relaxed text-center">
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
    <section>
      <div className="container">
        <div className="space-y-16">
          <Title variant="h2">
            What people <span className="text-gradient">say</span>
          </Title>
          <Carousel>
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
